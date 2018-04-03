import { auth, twitterProvider, fbProvider } from "./firebase";
import { doCreateUser, doAddCredentials } from './db';

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

export const doSignInWithFacebook = () => auth.signInWithRedirect(fbProvider);

export const doGetRedirectResult = () =>
  auth
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        const uid = result.user.uid
        const isNewUser = result.additionalUserInfo.isNewUser;
        const token = result.credential.accessToken;
        const secret = result.credential.secret;
        const providerId = result.credential.providerId;
        const username = result.additionalUserInfo.username;
        const photoUrl =
          result.additionalUserInfo.profile.profile_image_url_https;
        if (isNewUser) {
          doCreateUser(
            uid,
            username,
            photoUrl
          )
          .catch(error => {
            console.log("Error creating user", error);
          });
          doAddCredentials(
            uid,
            providerId,
            token,
            secret
          )
          .catch(error => {
            console.log("Error adding credentials", error);
          });
        }
      }
    })
    .catch(function(error) {
      console.log(error)
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
