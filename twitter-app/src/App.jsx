import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Following from './pages/Following';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/following" element={<Following />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
