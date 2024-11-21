import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { users } from '../users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Track the current user

  const [followedUsers, setFollowedUsers] = useState([]);

  const followUser = (user) => {
    if (!followedUsers.some((u) => u.id === user.id)) {
      setFollowedUsers((prev) => [...prev, user]);
    }
  };

  const unfollowUser = (userId) => {
    setFollowedUsers((prev) => prev.filter((user) => user.id !== userId));
  };


  return (
    <UserContext.Provider
      value={{ users, currentUser, setCurrentUser, followedUsers, followUser, unfollowUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

