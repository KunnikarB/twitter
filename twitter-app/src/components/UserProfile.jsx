import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ProfileContainer = styled.div`
  
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100vh;
  overflow: auto;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  small {
    font-size: 14px;
    }

  p {
    font-size: 12px;
    color: #e1e8ed;
    text-align: center;
    max-width: 100%;
    margin: 5px 0;
  }
`;

export default function Profile() {
  const { userId } = useParams(); // Retrieve userId from the URL
  const [user, setUser] = useState(null); // State to store user data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch user data dynamically
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) {
    return <ProfileContainer>Error: {error}</ProfileContainer>;
  }

  if (!user) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  return (
    <ProfileContainer>
      <img src={user.image} alt={user.name} />
      <small>{user.name}</small>
      <p>Bio : {user.bio}</p>
    </ProfileContainer>
  );
}
