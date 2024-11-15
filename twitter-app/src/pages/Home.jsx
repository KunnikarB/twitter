import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import Header from '../components/Header';
import Profile from '../components/Profile';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import { TweetContext } from '../context/TweetContext';

import '../App.css';
import '../index.css';

const Home = () => {
  
  return (
    <TweetContext>
      <div className="layout ">
        <div className="left-sidebar">
          <Sidebar />
          <Profile />
        </div>

        <div className="homepage ">
          <div className="">
            <Header />
          </div>
          <div className="header">
            <Profile />

            <div className="card">
              <div className='input-tweet'>
              <TweetInput />
              </div>
              <TweetList />
            </div>
          </div>
        </div>

        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </TweetContext>
  );
}

export default Home