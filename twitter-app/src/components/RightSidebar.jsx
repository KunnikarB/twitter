import { USERS_FOR_RIGHT_PANEL } from '../db/dummy';
import { IoSearchOutline } from 'react-icons/io5';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="search">
        <div className="icon">
          <IoSearchOutline />
        </div>
        <input type="text" placeholder="Search" />
      </div>

      <h2>Who to follow</h2>
      <div className="who-to-follow">
        {USERS_FOR_RIGHT_PANEL.map((user) => (
          <div key={user.id} className="user">
            <div className="user-info">
              <img className="logo" src={user.profileImg} alt={user.name} />
              <div>
                <h4>{user.fullName}</h4>
                <p>@{user.username}</p>
              </div>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
