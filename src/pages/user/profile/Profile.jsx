import './profile.css';

import profile from '../../../assets/icons/user.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import editIcon from '../../../assets/icons/settings.svg';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import { selectUser, rmCredentials } from '../../auth/redux/authSlice';

import Button from '../../../components/button/Button';

const Profile = () => {
  const authUser = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useParams();

  const userDisplayed = useSelector(selectUser);

  useEffect(() => {
    if (username !== userDisplayed.username) {
      navigate('/links/notfound');
    }
  }, [username, navigate, userDisplayed]);

  const logoutHandler = () => {
    if (confirm('anda yakin ingin keluar')) {
      const removeCred = async () => {
        dispatch(rmCredentials());
        navigate('/login');
      };
      removeCred();
    }
  };

  const buttonAuthUser = userDisplayed.username === authUser.username && (
    <div>
      <button onClick={() => navigate(`/${authUser.username}/edit`)}>
        <img title="edit" src={editIcon} alt="" />
      </button>
      <button onClick={logoutHandler}>
        <img title="logout" src={logoutIcon} alt="" />
      </button>
    </div>
  );

  const buttonMentor = userDisplayed.username === authUser.username &&
    authUser.role === 'mentor' && <Button url="/students" text="Students" />;

  const buttonStudent = userDisplayed.username === authUser.username &&
    authUser.role === 'student' && (
      <Button
        url={`/students/${userDisplayed.username}/raports`}
        text="Raport"
      />
    );

  let content = (
    <div className="description">
      <div className="top">
        <h1>Profile</h1>
        {buttonAuthUser}
      </div>
      <div className="bottom">
        <p>{userDisplayed.role}</p>
        <p>{userDisplayed.username}</p>
        <p>{userDisplayed.phone}</p>
        {buttonMentor}
        {buttonStudent}
      </div>
    </div>
  );

  return (
    <div className="container-user-profile">
      <div className="wrapper">
        <div className="profile">
          <img src={profile} alt="error" />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Profile;
