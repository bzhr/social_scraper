const path = require("path");
const _ = require(`lodash`);
const littleforkCommands = require("./src/littleforkCommands");

const removeCsvExtension = filename => filename.replace(".csv", "");

exports.onPreBuild = ({ input }) => {
  return new Promise((resolve, reject) => {
    resolve(littleforkCommands.processNewForms());
  });
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/:path';

    // Update the page.
    createPage(page);
  }
};


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    query ResourcesQuery {
      allFile {
        edges {
          node {
            relativePath
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allFile.edges.forEach(function(edge) {
      const { node } = edge;
      const urlPath = '/app/' + node.name;
      const nodeName = `all` + _.upperFirst(_.camelCase(`${node.name} Csv`));
      console.log(nodeName);
      return graphql(`
        query IndexQuery {
          ${nodeName} {
            edges {
              node {
                retweet_count
                favorite_count
                tweet
                tweet_time
                medias_0_type
                tweet_id
              }
            }
          }
        }
      `).then(function(result) {
        const component = `src/templates/resource.js`;
        console.log(urlPath);
        createPage({
          path: urlPath,
          component: path.resolve(component),
          context: result
        });
      });
    });
  });
};
