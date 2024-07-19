import React, { useState } from 'react';
import Modal from './ModelLearn';
import './ModelLearnAppStyle.css';

export default function ModelLearnApp() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState(null);
  
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    const handleSubmit = (inputData) => {
      setData(inputData);
    };
  
    return (
      <div className="App">
        <button className='border-2 border-black' onClick={handleOpenModal}>Open Modal</button>
        <Modal show={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
        {data && (
          <div>
            <h3>Submitted Data</h3>
            <p>Title: {data.title}</p>
            <p>Number: {data.number}</p>
          </div>
        )}
      </div>
    );
}
