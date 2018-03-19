import { auth, twitterProvider, fbProvider } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// const provider = new auth.TwitterAuthProvider()
// Twitter Sign Up
export const doSignInWithTwitter = () => 
  auth.signInWithRedirect(twitterProvider);

export const doSignInWithFacebook = () => 
  auth.signInWithRedirect(fbProvider);

export const getRedirectResult = () =>
  auth.getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const token = result.credential.accessToken;
      const secret = result.credential.secret;
      // ...
      console.log("Token, secret", token, secret)
    }
    // The signed-in user info.
    const user = result.user;
    console.log("user", user)
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
    console.log("Errors", errorCode, errorMessage, email, credential)
  });

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
