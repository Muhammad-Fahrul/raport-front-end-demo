import './editUser.css';

const EditUser = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Did not work on demo version');
  };
  return (
    <div className="container-user-edit">
      <form className="wrapper" autoComplete="off" onSubmit={handleUpdate}>
        <h1 className="title">Update Profile</h1>
        <div>
          <label>
            <input name="firstname" type="text" className="input" />
            <span>Fullname</span>
          </label>

          <label>
            <input name="lastname" type="text" className="input" />
            <span>Nickname</span>
          </label>
        </div>

        <label>
          <input name="phone" type="number" className="input" />
          <span>Phone</span>
        </label>

        <label>
          <input name="oldpassword" type="text" className="input" />
          <span>Old Password</span>
        </label>

        <label>
          <input name="newpassword" type="text" className="input" />
          <span>New Password</span>
        </label>

        <button className="update">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
