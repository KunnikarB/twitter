import PropTypes from 'prop-types';
import Tweet from './Tweet';
import profileImg from '../../public/avatars/girl2.png';
import AppContext from '../AppContext';
import { useContext } from 'react';

const TweetList = (props) => {
  const { tweets } = props;
  const { user } = useContext(AppContext);

  return (
    <ul>
      {tweets.map((tweet, tweetIndex) => (
        <Tweet {...props} key={tweetIndex} index={tweetIndex}>
          <div className="post">
            <div className="user-post">
              <img className="post-logo" src={profileImg} alt="" />
              <small>Post by {user}</small>
            </div>
            <p>{tweet}</p>
          </div>
        </Tweet>
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
