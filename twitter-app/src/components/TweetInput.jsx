import { useState, useContext, useRef } from 'react';
import { TweetContext } from '../context/TweetContext';
import PropTypes from 'prop-types';
import '../index.css';

const TweetInput = () => {
  const [tweet, setTweet] = useState('');
  const { addTweet } = useContext(TweetContext);
  const inputRef = useRef(null);

  const handleTweet = (e) => {
    e.preventDefault();
    if (tweet.trim()) {
    addTweet({
      id: Date.now(),
      text: tweet,
      likes: 0,
      retweets: 0,
      replies: [],
    });
    setTweet('');
  }
  };

  return (
    <div>
      <form onSubmit={handleTweet}>
        <input
          ref={inputRef}
          type="text"
          value={tweet}
          placeholder="What's happening?"
          onChange={(e) => setTweet(e.target.value)}
        />
        <button className="post-btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};
TweetInput.propTypes = {
  addTweet: PropTypes.func.isRequired,
};

export default TweetInput;
