import profileImg from '../../public/avatars/girl2.png';
import '../index.css';

const Profile = () => {
  return (
    <>
      <div className="profile">
        <img src={profileImg} alt="profile" />
        <h3>Kunnikar</h3>
        <p>@Kunnikar</p>
      </div>
    </>
  );
};

export default Profile;
