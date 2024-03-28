import './student.css';

import bookIcon from '../../../../assets/icons/book.svg';

import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const Student = ({ student }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleToRaport = () =>
    navigate(`/raport-front-end-demo/students/${student.username}/raports`, {
      state: { from: location },
    });

  let content = (
    <li className="container-student">
      <div className="top">
        <p
          className="description"
          onClick={() =>
            navigate(`/raport-front-end-demo/students/${student.id}`)
          }
        >
          {student.username}
        </p>
      </div>
      <button className="raport-btn" title="raport" onClick={handleToRaport}>
        <img src={bookIcon} alt="raport" />
      </button>
    </li>
  );

  return <>{content}</>;
};

Student.propTypes = {
  student: PropTypes.object.isRequired,
};

const memoizedStudent = memo(Student);

export { memoizedStudent as Student };
