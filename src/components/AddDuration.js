import React, { useState } from 'react';

function TimeInput({ onClose, onUpdateStatus, setDurationValue, setOpenModal }) {
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setSelectedMinute(event.target.value);
  };

  const handleSaveClick = () => {
    if (selectedHour !== null && selectedMinute !== null) {
      const formattedTime = `${selectedHour}:${selectedMinute}`;
      onUpdateStatus(formattedTime);
      setDurationValue(formattedTime);
    }
    setOpenModal(false);
  };

  return (
    <div>
      <div className='duration_content'>
        <div>
      <h1>Select time:</h1>
      </div>
      <div>
      <select className='duration_select' value={selectedHour} onChange={handleHourChange}>
        <option value={null}>--</option>
        {Array.from({ length: 13 }, (_, i) => (
          <option key={i} value={i.toString().padStart(2, '0')}>
            {i.toString().padStart(2, '0')}
          </option>
        ))}
      </select>
      
      :
      <select className='duration_select' value={selectedMinute} onChange={handleMinuteChange}>
        <option value={null}>--</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i * 5} value={(i * 5).toString().padStart(2, '0')}>
            {(i * 5).toString().padStart(2, '0')}
          </option>
        ))}
      </select>
      </div>
      </div>
      <div className="buttons_duration">
      <button className="save_button" onClick={handleSaveClick}>Save</button>
      <button className="cancel_button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TimeInput;
