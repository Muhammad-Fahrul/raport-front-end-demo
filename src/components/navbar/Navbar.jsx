import './navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import profileIcon from '../../assets/icons/user.svg';

import useAuth from '../../hooks/useAuth';
import useScroll from '../../hooks/useScroll';
import { selectUser } from '../../pages/auth/redux/authSlice';

const Navbar = () => {
  const user = useSelector(selectUser);
  const { username } = useAuth();
  const height = useScroll();
  const navigate = useNavigate();
  return (
    <div className={`container-navbar ${height >= 10 ? 'shadow' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <h1 onClick={() => navigate('')} style={{ cursor: 'pointer' }}>
            R<span style={{ fontSize: '1rem' }}>aport</span>
          </h1>
        </div>
        <div className="right">
          {user?.username && (
            <div className="nav-btns">
              <Link to={`${username}`}>
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
