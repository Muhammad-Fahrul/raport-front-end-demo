import './newStudent.css';

import { useState } from 'react';
import PropTypes from 'prop-types';

const NewStudent = ({ setScreen, handleAdd }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = (e) => {
    if (e.target.className === 'container-student-new') {
      setScreen(false);
    }
  };

  return (
    <div className="container-student-new" onClick={handleClose}>
      <form
        onSubmit={(e) => handleAdd(e, { username, password })}
        className="wrapper"
      >
        <div className="title">
          <h1 style={{ fontSize: '1em' }}>New Student</h1>
        </div>

        <div className="inputBox">
          <input
            name="username"
            type="text"
            required="required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Username</span>
        </div>

        <div className="inputBox">
          <input
            name="password"
            type="text"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </div>

        <button className="enter">Add</button>
      </form>
    </div>
  );
};

NewStudent.propTypes = {
  setScreen: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default NewStudent;
