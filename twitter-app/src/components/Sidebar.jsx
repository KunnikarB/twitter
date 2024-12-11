import Xsvg from './svgs/X';
import { MdHomeFilled } from 'react-icons/md';
import { IoNotifications } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import UserProfile from './UserProfile';
import '../index.css';
import { useUserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = () => {
  const style = {
    marginRight: '10px',
    fontSize: '20px',
  };

  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserContext();

  const Logout = () => {
    setCurrentUser(null); // Clear the current user
    navigate('/'); // Redirect to StartPage
  };

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-top">
          <div className="logo">
            <Link to="/">
              <Xsvg />
            </Link>
          </div>
          <div className="sidebar">
            <ul>
              <li>
                <Link to={`/profile/${currentUser.id}`}>
                  <MdHomeFilled style={style} />
                  Home
                </Link>
              </li>

              <li>
                <IoNotifications style={style} />
                Notifications
              </li>

              <li>
                <Link to={`/profile/${currentUser.id}`}>
                  <FaUser style={style} />
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sidebar-user">
        <div className="user-logout">
          <div className="profile-container">
            <UserProfile />
            <button onClick={Logout} className="btn logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
