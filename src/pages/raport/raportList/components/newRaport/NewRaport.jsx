import './newRaport.css';

import { useState } from 'react';

import PropTypes from 'prop-types';

const NewRaport = ({ setScreenNR, handleAdd }) => {
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState(true);

  return (
    <div className="container-raport-new">
      <form
        className="wrapper"
        onSubmit={(e) => handleAdd(e, { chapter, verse, detail, status })}
      >
        <span className="close" onClick={() => setScreenNR(false)}>
          x
        </span>
        <div style={{ textAlign: 'center' }}>
          <h3>New</h3>
        </div>

        <div className="inputBox">
          <input
            name="chapter"
            type="number"
            required="required"
            min={0}
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />
          <span>Chapter</span>
        </div>
        <div className="inputBox">
          <input
            name="verse"
            type="number"
            required="required"
            min={0}
            value={verse}
            onChange={(e) => setVerse(e.target.value)}
          />
          <span>Verse</span>
        </div>
        <div className="inputBox">
          <input
            name="detail"
            type="text"
            required="required"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <span>detail</span>
        </div>
        <div className="input-status">
          <label htmlFor="status">Mengulang?</label>
          <input
            id="status"
            type="checkbox"
            checked={!status}
            onChange={() => {
              setStatus((prev) => !prev);
            }}
          />
        </div>

        <button className="enter">Add</button>
      </form>
    </div>
  );
};

NewRaport.propTypes = {
  setScreenNR: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default NewRaport;
