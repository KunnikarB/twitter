import Xsvg from './svgs/X';
import { MdHomeFilled } from 'react-icons/md';
import { IoNotifications } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import UserProfile from './UserProfile';
import '../index.css';

const Sidebar = () => {
  const style = {
    marginRight: '10px',
    fontSize: '20px',
  };
  return (
    <div className='sidebar-container'>
    <div className='sidebar-top'>
      <div className="logo">
        <Xsvg />
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <MdHomeFilled style={style} />
            Home
          </li>

          <li>
            <IoNotifications style={style} />
            Notifications
          </li>
          <li>
            <FaUser style={style} />
            Profile
          </li>
        </ul>
      </div>
    </div>
    <div className='sidebar-user'>
      <UserProfile />
    </div>
    </div>
  );
};
export default Sidebar;
