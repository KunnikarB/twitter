import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import { TweetProvider } from '../context/TweetContext';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { getFromStorage } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';


const Profile = () => {

  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserContext();
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    if (!currentUser) {
      const storedUser = getFromStorage('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser)); // Restore user to context
        setUser(JSON.parse(storedUser)); // Update local state
      } else {
        navigate('/'); // Redirect to StartPage if no user is found
      }
    }
  }, [currentUser, setCurrentUser, navigate]);

  if (!user) {
    return null; // Prevent rendering until user data is available
  }
  
  return (
    <>
      
      <TweetProvider>
        <div className="layout ">
          <div className="left-sidebar">
            <Sidebar />
          </div>

          <div className="homepage ">
            <div className="">
              <Header />
            </div>
            <div className="header">
              <UserProfile />

              <div className="card">
                <div className="input-tweet">
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
    </>
  );
};

export default Profile;
