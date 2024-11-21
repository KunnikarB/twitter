import { useUserContext } from '../context/UserContext';
import Xsvg from '../components/svgs/X';
import Header from '../components/Header';

import '../index.css';
import { Link } from 'react-router-dom';

const Following = () => {
  const { currentUser,followedUsers, unfollowUser } = useUserContext();

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
      </div>
    </>
  );
};

export default Following;
