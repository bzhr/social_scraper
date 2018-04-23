import { auth, twitterProvider, fbProvider } from "./firebase";
import { doCreateUser, doAddCredentials } from "./db";
import * as routes from "../constants/routes";

export const doSignInWithTwitter = () =>
  auth.signInWithRedirect(twitterProvider);

export const doSignInWithFacebook = () => auth.signInWithRedirect(fbProvider);

export const doGetRedirectResult = () =>
  auth
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        const uid = result.user.uid;
        const isNewUser = result.additionalUserInfo.isNewUser;
        const token = result.credential.accessToken;
        const secret = result.credential.secret;
        const providerId = result.credential.providerId;
        const username = result.additionalUserInfo.username;
        const photoUrl =
          result.additionalUserInfo.profile.profile_image_url_https;
        if (isNewUser) {
          doCreateUser(uid, username, photoUrl).catch(error => {
            console.log("Error creating user", error);
          });
          doAddCredentials(uid, providerId, token, secret).catch(error => {
            console.log("Error adding credentials", error);
          });
        }
      }
    })
    .catch(function(error) {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

const isBrowser = typeof window !== `undefined`;

const getUser = () =>
  window.localStorage.gatsbySocialScraperUser
    ? JSON.parse(window.localStorage.gatsbySocialScraperUser)
    : {};
export const getCurrentUser = () => isBrowser && getUser();

export const setUser = user =>
  (window.localStorage.gatsbySocialScraperUser = JSON.stringify(user));

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.uid;
};

// Sign out
// export const doSignOut = () => auth.signOut().then(() => setUser({}))

export const doSignOut = function() {
  auth.signOut();
  setUser({})
  console.log("Signed out User")
}

auth.onAuthStateChanged(authUser => {
  if (authUser) {
    console.log("Setting User")
    setUser(authUser);
    console.log("User is set!")
    doGetRedirectResult()
  }
});
