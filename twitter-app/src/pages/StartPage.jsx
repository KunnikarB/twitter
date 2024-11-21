import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Main = styled.main`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  h1 {
    text-align: center;
    color: white;
    font-size: 30px;
    margin-bottom: 40px;

  }

  .users {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    gap: 15px;
    margin: 0 auto;

    &__user {
      display: flex;
      flex-direction: column;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 5px;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 5px;
      }

      .name {
        margin: 10px auto;
        color: white;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export default function StartPage() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useUserContext();

  const onClickUser = (id) => {
    const user = users.find((u) => u.id === id);
    setCurrentUser(user); // Set the current user
    navigate(`/profile/${id}`); // Navigate to the user's profile page
  };

  return (
    <Main>
      <h1>Select a user</h1>
      <div className="users">
        {users.map((u) => (
          <button
            onClick={() => onClickUser(u.id)}
            className="users__user"
            key={u.id}
          >
            <img src={u.image} alt="" />
            <span className="name">{u.name}</span>
          </button>
        ))}
      </div>
    </Main>
  );
}
