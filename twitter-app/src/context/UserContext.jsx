import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { users } from '../users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Track the current user

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

