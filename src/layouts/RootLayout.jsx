// RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { useLocation } from 'react-router-dom';

const RootLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar: Login ve kayıt sayfasında scroll'a bağlı görünür */}
      {!isLoginPage && <Navbar />}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default RootLayout;