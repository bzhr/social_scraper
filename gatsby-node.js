var admin = require("firebase-admin");

projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY
dbUrl = process.env.FIREBASE_ADMIN_DATABASE_URL

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: projectId,
    clientEmail: clientEmail,
    privateKey: JSON.parse(privateKey)
  }),
  databaseURL: dbUrl
});

// exports.onPreBuild = ({input}) => {
//  console.log("ON PRE BUILD", input)
// }