import { useUserContext } from '../context/UserContext';
import '../index.css';

const Following = () => {
  const { followedUsers, unfollowUser } = useUserContext();

  return (
    <div className="following-page">
      <h2>Following</h2>
      {followedUsers.length > 0 ? (
        <div className="following-list">
          {followedUsers.map((user) => (
            <div key={user.id} className="user">
              <div className="user-following">
                <img className="logo" src={user.image} alt={user.name} />
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
  );
};

export default Following;
