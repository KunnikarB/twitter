import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TweetContext } from '../context/TweetContext';
import { MdDelete } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa6';
import { FaRegComment } from 'react-icons/fa6';

const TweetInteractions = ({ tweetId }) => {
  const { likeTweet, retweetTweet, deleteTweet, commentOnTweet } =
    useContext(TweetContext);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() && comment !== '') {
      commentOnTweet(tweetId, comment);
      setComment(''); // Clear comment input after submitting
    }
  };

  return (
    <>
      <div className="interactions-btn">
        <button onClick={() => document.getElementById('textInput').focus()}>
          <FaRegComment />
        </button>
        <button onClick={() => likeTweet(tweetId)}>
          <FaRegHeart />
        </button>
        <button onClick={() => retweetTweet(tweetId)}>
          <FaRetweet />{' '}
        </button>
        <button onClick={() => deleteTweet(tweetId)}>
          <MdDelete />
        </button>
      </div>
      <form onSubmit={handleCommentSubmit} style={{ display: 'inline' }}>
        <input
          id="textInput"
          type="text"
          value={comment}
          placeholder="Add a comment"
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </>
  );
};
TweetInteractions.propTypes = {
  tweetId: PropTypes.string.isRequired,
};

export default TweetInteractions;
