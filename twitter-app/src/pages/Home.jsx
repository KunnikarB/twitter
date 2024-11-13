import {useState} from 'react';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import Tweet from '../components/Tweet';
import AppContext from '../AppContext';

import '../App.css';
import '../index.css';

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState('Kunnikar');

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  function handleDeleteTweet(Index) {
    const newTweet = tweets.filter((tweet, tweetIndex) => {
      return tweetIndex !== Index;
    });
    setTweets(newTweet);
  }

  return (
    <AppContext.Provider value={{ tweets, setTweets, user, setUser }}>
      <div className="layout ">
        

        <div className="homepage ">
          <div className="">
            <Header />
          </div>
          <div className="header">
            <Profile />

            <div className="card">
              <TweetInput addTweet={addTweet} />
              <TweetList
                tweets={tweets}
                handleDeleteTweet={handleDeleteTweet}
              />
            </div>
          </div>
        </div>

        
      </div>
    </AppContext.Provider>
  );
}

export default Home