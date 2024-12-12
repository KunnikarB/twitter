import Xsvg from '../components/svgs/X';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { getFromStorage } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import RightSideBar from '../components/RightSideBar';
import '../index.css';
import { Link } from 'react-router-dom';

const Following = () => {
  const { currentUser, followedUsers, unfollowUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();
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
  }, [currentUser, navigate, setCurrentUser]);

  if (!user) {
    return null; // Prevent rendering until user data is available
  }


  return (
    <>
      <div className="layout ">
        <div className="logo">
          <Link to={`/profile/${currentUser.id}`}>
            <Xsvg />
          </Link>

        </div>
        
        <div className="homepage ">
          <div className="">
            <Header />
          </div>

          <div className="header">
            <div className="following-page">
              <h2>You Following</h2>
              {followedUsers.length > 0 ? (
                <div className="following-list">
                  {followedUsers.map((user) => (
                    <div key={user.id} className="user">
                      <div className="user-following">
                        <img
                          className="logo"
                          src={user.image}
                          alt={user.name}
                        />
                        <p>@{user.name}</p>
                        <p>{user.bio}</p>
                        <button
                          className="btn"
                          onClick={() => unfollowUser(user.id)} // Remove user from the list
                        >
                          Unfollow
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>You are not following anyone yet.</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default Following;
