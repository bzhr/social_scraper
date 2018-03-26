import { db } from "./firebase";

// User API

export const doCreateUser = (
	id,
	username,
	providerId,
	apiKey,
	apiSecret,
	photoUrl
) =>
	db.ref(`users/${id}`).set({
		username,
		providerId,
		apiKey,
		apiSecret,
		photoUrl
	});

export const onceGetUsers = () => db.ref("users").once("value");

// Other db APIs ...
