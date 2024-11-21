import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { users } from '../users';
import { saveToStorage, getFromStorage } from '../utils/storage';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Track the current user

  // Initialize followed users from local storage
  const [followedUsers, setFollowedUsers] = useState(() => {
    const storedUsers = getFromStorage('followedUsers');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const followUser = (user) => {
    if (!followedUsers.some((u) => u.id === user.id)) {
      const updatedUsers = [...followedUsers, user];
      setFollowedUsers(updatedUsers);
      saveToStorage('followedUsers', JSON.stringify(updatedUsers));
      toast.success(`You followed ${user.name}`); // Show follow success message
    } else {
      toast.info(`You already follow ${user.name}`); // Prevent duplicates
    }
  };

  const unfollowUser = (userId) => {
    // Find the user in the followedUsers array
    const user = followedUsers.find((u) => u.id === userId);

    if (user) {
      // Remove the user from the followedUsers list
      const updatedUsers = followedUsers.filter((u) => u.id !== userId);
      setFollowedUsers(updatedUsers);
      saveToStorage('followedUsers', JSON.stringify(updatedUsers)); // Update local storage

      // Display a success toast
      toast.success(`You unfollowed ${user.name}`);
    } else {
      // Handle cases where the user isn't found
      toast.error('User not found or already unfollowed!');
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        setCurrentUser,
        followedUsers,
        followUser,
        unfollowUser,
      }}
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

