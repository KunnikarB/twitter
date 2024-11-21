import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="top-header">
      <div className="forYou">
        <p>For you</p>
      </div>
      <div className="following">
        <p onClick={() => navigate('/following')}>Following</p>
      </div>
    </div>
  );
};
export default Header;
