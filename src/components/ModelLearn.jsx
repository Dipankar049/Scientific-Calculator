import React, { useState } from 'react';
import './ModalLearnStyle.css';

export default function ModelLearn(props) {
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState('');
  
    if (!props.show) {
      return null;
    }
  
    const handleSubmit = () => {
      props.onSubmit({ title, number: parseInt(number, 10) });
      setTitle('');
      setNumber('');
      props.onClose();
    };
  
    return (
      <div className="modal-overlay border-2 border-blue-500">
        <div className="modal border-2 border-black">
          <div className="modal-header border-2 border-orange-400">
            <h2>Enter Details</h2>
            <button  className="close-button border-2 border-black" onClick={props.onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <label>
              Title:
              <input
              className='border-2 border-black'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Number:
              <input
              className='border-2 border-black'
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
          </div>
          <div className="modal-footer">
            <button className='border-2 border-black' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  };
