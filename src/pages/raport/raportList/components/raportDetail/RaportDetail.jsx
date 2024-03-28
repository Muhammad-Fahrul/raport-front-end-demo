import './raportDetail.css';

import deleteIcon from '../../../../../assets/icons/delete.svg';

import PropTypes from 'prop-types';

const RaportDetail = ({ studentId, raport, setScreen, handleDelete }) => {
  const handleClick = (e) => {
    if (e.target.className === 'container-raport-detail') {
      setScreen(false);
    }
  };

  return (
    <div className="container-raport-detail" onClick={handleClick}>
      <div className="wrapper">
        <div>
          <h3>Detail</h3>
          <button
            className="delete"
            onClick={() => handleDelete({ id: raport.id, studentId })}
          >
            <img src={deleteIcon} />
          </button>
        </div>
        <div>
          <p>Chapter: {raport.chapter}</p>
          <p>Verse: {raport.verse}</p>
          {raport.status && <p className="success">Lulus</p>}
          {!raport.status && <p className="failed">Mengulang</p>}
        </div>

        <p>{raport.detail}</p>
      </div>
    </div>
  );
};

RaportDetail.propTypes = {
  studentId: PropTypes.number.isRequired,
  raport: PropTypes.object.isRequired,
  setScreen: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RaportDetail;
