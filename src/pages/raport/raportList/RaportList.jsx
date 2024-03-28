import './raportList.css';

import addIcon from '../../../assets/icons/add.svg';
import ButtonIcon from '../../../components/button/ButtonIcon';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import {
  addRaportByStudent,
  deleteRaportById,
  selectStudentWithUsername,
} from '../../student/redux/studentSlice';

import Raport from './components/Raport';
import NewRaport from './components/newRaport/NewRaport';
import RaportDetail from './components/raportDetail/RaportDetail';

const RaportList = () => {
  const [screen, setScreen] = useState(false);
  const [detailRaport, setDetailRaport] = useState({});
  const [screenNR, setScreenNR] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useParams();

  const currentUser = useAuth();

  const student = useSelector((state) =>
    selectStudentWithUsername(state, username)
  );

  const handleDetail = (id) => {
    const raport = student.raport.find((r) => r.id === +id);
    setDetailRaport(raport);
    setScreen(true);
  };

  const handleAdd = async (e, payload) => {
    e.preventDefault();
    const length = student.raport.length;
    const id = length + 1;
    dispatch(
      addRaportByStudent({
        studentId: student.id,
        id,
        ...payload,
      })
    );
    alert(`Record baru berhasil ditambahkan`);
    setScreenNR(false);
  };

  const handleDelete = (id) => {
    if (confirm('anda yakin ingin menghapus record ini?')) {
      dispatch(deleteRaportById(id));
      alert(`Record berhasil dihapus`);
      setScreen(false);
    }
  };

  const previousPath = location.state && location.state.from.pathname;

  let content = student?.raport.length
    ? student.raport.map((r) => (
        <Raport key={r.id} raport={r} handleDetail={handleDetail} />
      ))
    : null;

  return (
    <div className="container-raport">
      <div className="top">
        <h1 className="username">
          <span>{username}</span> record
        </h1>
        <button
          className="back"
          onClick={() => navigate(previousPath, { replace: true })}
        >
          <p>&lt;</p>
        </button>
      </div>
      <table className="table-raport">
        <thead>
          <tr>
            <th>Chapter</th>
            <th>Verse</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>

      {screen && (
        <RaportDetail
          raport={detailRaport}
          studentId={student.id}
          setScreen={setScreen}
          handleDelete={handleDelete}
        />
      )}

      {screenNR && (
        <NewRaport
          studentId={student.id}
          setScreenNR={setScreenNR}
          handleAdd={handleAdd}
        />
      )}

      {currentUser?.isMentor && (
        <div onClick={() => setScreenNR(true)}>
          <ButtonIcon text="NEW">
            <img src={addIcon} />
          </ButtonIcon>
        </div>
      )}
    </div>
  );
};

export default RaportList;
