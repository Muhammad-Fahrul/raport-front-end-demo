import './navbar.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import profileIcon from '../../assets/icons/user.svg';

import useAuth from '../../hooks/useAuth';
import useScroll from '../../hooks/useScroll';
import { selectUser } from '../../pages/auth/redux/authSlice';

const Navbar = () => {
  const user = useSelector(selectUser);
  const { username } = useAuth();
  const height = useScroll();
  return (
    <div className={`container-navbar ${height >= 10 ? 'shadow' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <Link to="/">
            <h1>
              R<span style={{ fontSize: '1rem' }}>aport</span>
            </h1>
          </Link>
        </div>
        <div className="right">
          {user?.username && (
            <div className="nav-btns">
              <Link to={`/${username}`}>
                <span className="profile">
                  <img src={profileIcon} alt={username} />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
