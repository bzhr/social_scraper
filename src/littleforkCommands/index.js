const getTwitterProfile = (
	username,
	consumerKey,
	consumerSecret,
	accessToken,
	accessSecret
) =>
	`node_modules/.bin/littlefork -Q twitter_user:@${
		username
	} -p twitter_search,twitter_feed,http_get,media_exif,csv_export --twitter.consumer_key ${
		consumerKey
	} --twitter.consumer_secret ${consumerSecret} --twitter.access_token_key ${
		accessToken
	} --twitter.access_token_secret ${accessSecret} --csv.filename boleroo.csv`;
