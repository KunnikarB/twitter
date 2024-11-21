import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';

// Layout component for showing the Navbar and Footer in every page
const MainLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <RightSidebar />
      {/* Main Content Area */}
      <Outlet /> {/* Render the current route's component */}
    </>
  );
};

export default MainLayout;
