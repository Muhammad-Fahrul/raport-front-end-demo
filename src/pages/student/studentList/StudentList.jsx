import './studentList.css';

import addIcon from '../../../assets/icons/add.svg';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addStudent, selectStudents } from '../redux/studentSlice';

import ButtonIcon from '../../../components/button/ButtonIcon';
import { Student } from './components/Student';
import NewStudent from './components/NewStudent';

const StudentList = () => {
  const [screen, setScreen] = useState(false);

  const dispatch = useDispatch();

  const students = useSelector(selectStudents);

  let content = students?.length ? (
    students.map((student) => <Student key={student.id} student={student} />)
  ) : (
    <h4>Belum ada siswa</h4>
  );

  const handleAdd = (e, { username, password }) => {
    e.preventDefault();
    const add = () => {
      dispatch(
        addStudent({
          username,
          password,
          role: 'student',
          mentorId: 1,
          phone: '09876',
          raport: [],
        })
      );
      alert(`Santri dengan nama ${username} berhasil ditambahkan`);
      setScreen(false);
    };
    add();
  };

  return (
    <div className="container-students">
      <ul className="students">{content}</ul>

      {screen && <NewStudent setScreen={setScreen} handleAdd={handleAdd} />}

      <div onClick={() => setScreen(true)}>
        <ButtonIcon text="NEW">
          <img src={addIcon} />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default StudentList;
