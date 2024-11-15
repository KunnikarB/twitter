import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import Header from '../components/Header';
import Profile from '../components/Profile';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import { TweetProvider } from '../context/TweetContext';

import '../App.css';
import '../index.css';

const Home = () => {
  
  return (
    <TweetProvider>
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
    </TweetProvider>
  );
}

export default Home