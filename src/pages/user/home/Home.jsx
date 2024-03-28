import './home.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useAuth from '../../../hooks/useAuth';
import { selectUser } from '../../auth/redux/authSlice';

import Button from '../../../components/button/Button';

const Home = () => {
  const user = useSelector(selectUser);
  const { username } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate('/login');
    }
  }, [user.username, navigate]);

  return (
    <div className="container-home">
      <div className="wrapper">
        <div>
          <h1>Welcome</h1>
          <p>
            Start
            <strong> Your Journey</strong>
          </p>
        </div>
        <Button url={`/${username}`} text="Let's Go" />
      </div>
    </div>
  );
};

export default Home;
