const admin = require("firebase-admin");
const axios = require("axios");
const util = require('util');
// const exec = util.promisify(require('child_process').exec);
const exec = require('child_process').exec;
const _ = require("lodash");
const Promise = require("bluebird");

projectId = process.env.GATSBY_PROJECT_ID;
clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;
dbUrl = process.env.GATSBY_DATABASE_URL;
netlifyToken = process.env.GATSBY_NETLIFY_ACCESS_TOKEN;
netlifySiteId = process.env.GATSBY_NETLIFY_SITE_ID;
netlifyFormId = process.env.GATSBY_NETLIFY_FORM_ID;
twitterConsumerKey = process.env.GATSBY_TWITTER_CONSUMER_KEY;
twitterConsumerSecret = process.env.GATSBY_TWITTER_CONSUMER_SECRET;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: projectId,
    clientEmail: clientEmail,
    privateKey: JSON.parse(privateKey)
  }),
  databaseURL: dbUrl
});

const db = admin.database();

const getFormSubmissions = () =>
  axios
    .get(
      `https://api.netlify.com/api/v1/forms/${
        netlifyFormId
      }/submissions/?access_token=${netlifyToken}`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
const processedForms = [];

const filterForms = data =>
  data.filter(form => processedForms.indexOf(form.id) === -1);

const getCredentials = uid => db.ref(`credentials/${uid}`);

const processNewForms = () => {
  return getFormSubmissions()
    // .then(data => filterForms(data))
    .then(function(filteredData) {
      const promises = filteredData.map(prepareAndRun)
      const commands = Promise.all(promises)
      return commands
    }
  )
};

const prepareAndRun = function(form) {
    const source = form.data.name;
    const uid = form.data.email;
    const term = form.data.message;
  // return new Promise(function(resolve) {
    return getCredentials(uid).once("value").then(function(data) {
      const creds = data.val();
      if (creds) {
        return creds
      }
    }).then(creds => {
      console.log("Creds Result", creds)
      const token = creds.token;
      const secret = creds.secret;
      const command = twitterProfileCommand(
        term,
        twitterConsumerKey,
        twitterConsumerSecret,
        token,
        secret,
        uid
      );
      return command
    }).then(command => {
    console.log("Running command");
    return executeShellCommand(command);console.log("Command Finished")
    })
  // })
}

const twitterProfileCommand = (
  username,
  consumerKey,
  consumerSecret,
  accessToken,
  accessSecret,
  uid
) => {
  const uidLower = _.lowerCase(uid);
  const usernameLower = _.lowerCase(username);
  const filename = `${usernameLower}_${uidLower}.csv`.replace(/\s/g, "");
  console.log("Filename", filename);
  return `node_modules/.bin/sugarcube -Q twitter_user:@${
    username
  } -p twitter_search,twitter_feed,http_get,media_exif,csv_export --twitter.consumer_key ${
    consumerKey
  } --twitter.consumer_secret ${consumerSecret} --twitter.access_token_key ${
    accessToken
  } --twitter.access_token_secret ${accessSecret} --csv.filename ./src/data/${
    filename
  }`;
};

const executeShellCommand = command =>
  new Promise((resolve) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          console.log(err);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        resolve(stdout)
      });
  })

exports.processNewForms = processNewForms;
