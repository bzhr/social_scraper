export const sort = (a, b) => {
  return (
    a.node.retweet_count - b.node.retweet_count ||
    a.node.favorite_count.localeCompare(b.node.favorite_count)
  );
};
export const favoriteToInt = x => {
  x.favorite_count = parseInt(x.favorite_count);
  return x;
};
export const retweetToInt = x => {
  x.retweet_count = parseInt(x.retweet_count);
  return x;
};

// From https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/entities-object
// Type of uploaded media. Possible types include photo, video, and animated_gif.
// Does it means 'image' in the CSV is added by Littlefork?
export const twitterMediaTypes = ["image", "video", ""];

export const countWordOccurences = (term, data) => {
  const occurences = data.filter(val => {
    return val.medias_0_type === term;
  });
  {
    return { count: occurences.length, name: term };
  }
};

export const termToWordOccurences = (terms, data) => {
  return terms.map(val => {
    return countWordOccurences(val, data);
  });
};

export const getTweetYear = tweets => {
  return tweets.map(tweet => {
    return new Date(tweet.tweet_time).getFullYear();
  });
};

export const countOccurences = array => {
  return array.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
}
