import { MdDelete } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa6';
import { FaRegComment } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Tweet = (props) => {
  const { children, handleDeleteTweet, index, onRetweet, onComment } = props;

  const [likes, setLikes] = useState(0);

  function onLike() {
    setLikes(likes + 1);
  }

  return (
    <li className="tweetItem">
      {children}
      <div className="tweet-actions">
        <button onClick={onComment} className="comment-icon">
          <FaRegComment /> 
        </button>
        <button onClick={onRetweet} className="retweet-icon">
          <FaRetweet /> 
        </button>
        <button onClick={onLike} className="like-icon">
          <FaRegHeart /> {likes}
        </button>
        <button
          onClick={() => handleDeleteTweet(index)}
          className="delete-icon"
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

Tweet.propTypes = {
  children: PropTypes.node,
  handleDeleteTweet: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  onRetweet: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
};

export default Tweet;
