
import { IoSearchOutline } from 'react-icons/io5';
import { useUserContext } from '../context/UserContext';

const RightSidebar = () => {
  
  const { users, currentUser} = useUserContext();

  const filteredUsers = users.filter((user) => user.id !== currentUser.id);

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
        {filteredUsers.map((user) => (
          <div key={user.id} className="user">
            <div className="user-info">
              <img className="logo" src={user.image} alt={user.name} />
              <div>
                <p>@{user.name}</p>
                <p>{user.bio}</p>
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
