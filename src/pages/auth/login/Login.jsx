import './login.css';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loader from '../../../components/loader/Loader.jsx';

import { setCredentials } from '../redux/authSlice.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setError('');
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const fakeData = { username, password };

        dispatch(setCredentials(fakeData));
        setError(null);
        navigate('/');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  return (
    <div className="wrapper-login">
      <div className="title">
        <p>Login</p>
        <p className={`${error ? 'err-alert' : 'offscreen'}`}>{error}</p>
      </div>
      <form className="__form" autoComplete="off">
        <input
          className="__input"
          name="username"
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="__input"
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="__btn" onClick={(e) => handleSubmit(e)}>
          Lets go!
        </button>
      </form>
      {loading && <Loader />}
    </div>
  );
};

export default Login;
