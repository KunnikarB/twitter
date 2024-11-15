import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const TweetContext = createContext();

const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const retweetTweet = (id) => {
    const tweetToRetweet = tweets.find((tweet) => tweet.id === id);
    if (tweetToRetweet) {
      const newRetweet = {
        ...tweetToRetweet,
        id: Date.now(), // new ID for retweet
        retweets: tweetToRetweet.retweets + 1,
        isRetweet: true,
      };
      setTweets([newRetweet, ...tweets]);
    }
  };

  const commentOnTweet = (id, comment) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              replies: [...tweet.replies, { id: Date.now(), text: comment }],
            }
          : tweet
      )
    );
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };

  return (
    <TweetContext.Provider
      value={{
        tweets,
        addTweet,
        likeTweet,
        retweetTweet,
        commentOnTweet,
        deleteTweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

TweetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TweetContext, TweetProvider };
