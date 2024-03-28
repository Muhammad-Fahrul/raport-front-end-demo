import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { selectUser } from '../pages/auth/redux/authSlice.js';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';

const MainLayout = () => {
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (user && location.pathname === '/raport-front-end-demo/login') {
      navigate('/raport-front-end-demo');
    }
  }, [user, navigate, location]);

  return (
    <div>
      <Navbar />
      <div className="container-global">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
