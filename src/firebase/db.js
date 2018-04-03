import { db } from "./firebase";

export const doCreateUser = (
  id,
  username,
  photoUrl
) =>
  db.ref(`users/${id}`).set({
    username,
    photoUrl
  });

export const doAddCredentials = (
  id,
  providerId,
  token,
  secret
) =>
  db.ref(`credentials/${id}`).set({
    providerId,
    token,
    secret,
  });

export const onceGetUsers = () => db.ref("users").once("value");

// Other db APIs ...
