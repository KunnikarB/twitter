import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
