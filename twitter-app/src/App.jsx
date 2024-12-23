import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Profile from './pages/Profile';
import Following from './pages/Following';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
