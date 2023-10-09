import React, { Component, useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

 const AddDeadline = ({onClose, onUpdateStatus, task, deadline, onDateSelected, setOpenModal, setSaveClicked}) => {
  const [selectedDeadline, setSelectedDeadline] = useState(deadline === '' ? new Date() : deadline);

  const handleSetDeadline = (date) => {
    setSelectedDeadline(date);
    onDateSelected(date);
    
  }

  const handleSaveDeadline = () => {
    const updatedStatus = { ...task, deadline: selectedDeadline };
    onUpdateStatus(updatedStatus);
    setOpenModal(false);
    setSaveClicked(true);
    
  }

  return (
    <>
    <div className='date-picker-container'>
        <Datetime
          closeOnSelect={false}
          input={false}
          onChange={handleSetDeadline}
          value={selectedDeadline}
        />
      </div>


        <div className='buttons_duration'>
          <button className='save_button' onClick={handleSaveDeadline}>Save</button>
          <button className='cancel_button' onClick={onClose}>Cancel</button>
        </div>
    </>
  )
 }

export default AddDeadline;
