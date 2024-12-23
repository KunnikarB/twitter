import PropTypes from 'prop-types';
import TweetInteractions from './TweetInteractions';
import { TweetContext } from '../context/TweetContext';
import { useContext } from 'react';
import UserProfile from './UserProfile';

const TweetList = () => {
  const { tweets } = useContext(TweetContext);
  
  return (
    <ul>
      {tweets.map((tweet) => (
        <div className="tweet" key={tweet.id}>
          <div className="post">
            <div className="post-context">
              <div className='post-by'>
                <small>Post by:</small>
                <UserProfile user={tweet.user} />
              </div>
              <p>{tweet.text}</p>
            </div>

            <div className="tweet-interactions">
              <p>Likes: {tweet.likes}</p>
              <p>Retweets: {tweet.retweets}</p>
              <p>Replies: {tweet.replies.length}</p>
            </div>

            <TweetInteractions tweetId={tweet.id} />
            <div className="replies">
              {tweet.replies.map((reply) => (
                <div key={reply.id} className="reply">
                  <p>💬 {reply.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TweetList;
