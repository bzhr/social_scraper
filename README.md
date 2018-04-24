# 🐣 Social Scraper

A static web app for data mining from social media. Social scraper takes advantage of the command line tool [Sugarcube](https://gitlab.com/sugarcube) to make shell commands and retrieve data from Twitter, Facebook or Instagram. 

## Stack
Social scraper is a static web page built with modern tools. The stack includes:

- [Netlify](http://netlify.com) - To serve the web site over an encrypted CDN. To build the web site in a Docker container. Also form management is handled by Netlify. The user fills a form to add a resource to his profile. 
- [Gatsby](http://gatsbyjs.org) - Gatsby is an amazing tool for building static web sites using the JAM stack. Static web site can have some dynamism and interactivity by using microservices. This is a very powerful combination. Gatsby web sites are blazing fast which is welcomed. 
- [Firebase](http://firebase.google.com/) - Authentication database. Firebase is used for social media authentication.
- [Semantic-UI](https://react.semantic-ui.com/) & [reharts](http://recharts.org/) - For the user interface. 
- [Sugarcube](https://gitlab.com/sugarcube) - To fetch data.

## How to run locally
Clone repo:
`git clone git@github.com:bzhr/social_scraper.git`
You need to have a recent version of Node installed with package management tool NPM.
`cd social_scraper && npm install`
Install Gatsby command line tool globally:
`npm install gatsby-cli -g`
Then for local development:
`gatsby develop` Fires a local server with hot reloading. 
`gatsby build` Builds the web-site. This command is used when deploying to production.
`gatsby serve` After building the web site to serve the static files. 

## Environmental variables
To run the project you need to have a firebase database and add some environmental variables. 

List of environmental variables:
FIREBASE_ADMIN_CLIENT_EMAIL - Check Firebase Admin
FIREBASE_ADMIN_PRIVATE_KEY - Check Firebase Admin
GATSBY_API_KEY - Firebase API key
GATSBY_AUTH_DOMAIN - Firebase Auth Domain
GATSBY_DATABASE_URL - Firebase DB URL
GATSBY_MESSAGING_SENDER_ID - Firebase messaging sender ID
GATSBY_NETLIFY_ACCESS_TOKEN - Netlify Access Token
GATSBY_NETLIFY_FORM_ID - Netlify Form ID
GATSBY_NETLIFY_SITE_ID - Netlify Site ID
GATSBY_PROJECT_ID - Firebase Project ID
GATSBY_STORAGE_BUCKET - Firebase Storage Bucket
GATSBY_TWITTER_CONSUMER_KEY - Twitter APP consumer key
GATSBY_TWITTER_CONSUMER_SECRET - Twitter APP consumer secret
## How to contribute