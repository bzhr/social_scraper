import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyA43E7NwD4lHrw5Q97XZEvt_SbxnNEvDkA",
  authDomain: "socialscraper-b61b6.firebaseapp.com",
  databaseURL: "https://socialscraper-b61b6.firebaseio.com",
  projectId: "socialscraper-b61b6",
  storageBucket: "socialscraper-b61b6.appspot.com",
  messagingSenderId: "619392522062"
};

const devConfig = {
  apiKey: "AIzaSyCAyYi_TW3p2d7xSzFhskd6ju_jJWgyLeU",
  authDomain: "socialscraperdev.firebaseapp.com",
  databaseURL: "https://socialscraperdev.firebaseio.com",
  projectId: "socialscraperdev",
  storageBucket: "socialscraperdev.appspot.com",
  messagingSenderId: "144987363582",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const twitterProvider = new firebase.auth.TwitterAuthProvider()
const fbProvider = new firebase.auth.FacebookAuthProvider()

export {
  db,
  auth,
  twitterProvider,
  fbProvider
};
