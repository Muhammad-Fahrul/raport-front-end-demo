import './studentDetail.css';

import profileIcon from '../../../assets/icons/user.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  deleteStudentById,
  selectStudentWithStats,
} from '../redux/studentSlice';

const StudentDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentId } = useParams();

  const student = useSelector((state) =>
    selectStudentWithStats(state, studentId)
  );

  const handleDelete = () => {
    if (confirm('anda ingin menghapus siswa ini')) {
      dispatch(deleteStudentById(studentId));
      alert(`Santri dengan nama ${student.username} berhasil dihapus`);
      navigate('/raport-front-end-demo/students', { replace: true });
    }
  };

  const buttonDeleteStudent = (
    <button
      className="delete"
      onClick={handleDelete}
      style={{ width: 'min-content', backgroundColor: 'red' }}
    >
      Delete
    </button>
  );

  let content = (
    <div className="description">
      <div className="top">
        <h1>Profile</h1>
      </div>
      <div className="bottom">
        <p>{student.role}</p>
        <p>{student.username}</p>
        <p>{student.phone}</p>
        {buttonDeleteStudent}
      </div>
    </div>
  );

  return (
    <div className="container-student-detail">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <span
          style={{ height: '2px', border: '1px dashed black', flex: '2' }}
        />
        <button
          className="back"
          onClick={() =>
            navigate('/raport-front-end-demo/students', { replace: true })
          }
        >
          <p>&lt;</p>
        </button>
      </div>
      <div className="wrapper">
        <div className="profile">
          <img src={profileIcon} alt="error" />
        </div>
        {content}
      </div>
      <div>
        <h3 style={{ marginBottom: '.5em' }}>Statistik</h3>
        <div className="stats">
          <article>
            <div>
              <p>Lulus</p>
              <p>{student.success}</p>
            </div>
          </article>
          <article>
            <div>
              <p>Gagal</p>
              <p>{student.fail}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
