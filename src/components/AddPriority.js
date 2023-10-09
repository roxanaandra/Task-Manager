import React, { useState } from 'react';

const AddPriority = ({ onUpdateStatus, onClose, setOpenModal, setSelectedAddPriority }) => {
  const [selectedPriority, setSelectedPriority] = useState('');

  const handleButton = (priorityValue) => {
    setSelectedPriority(priorityValue);
  };

  const saveHandler = () => {
    if (selectedPriority) {
      onUpdateStatus(selectedPriority);
      setSelectedAddPriority(selectedPriority);
      setOpenModal(false);
      setSelectedPriority('');
    }
  };

  return (
    <>
      <div className="buttons_priority">
        <button
          className={`button_priority ${selectedPriority === '!' ? 'selected-button' : ''}`}
          onClick={() => handleButton('!')}
        >
          !
        </button>

        <button
          className={`button_priority ${selectedPriority === '!!' ? 'selected-button' : ''}`}
          onClick={() => handleButton('!!')}
        >
          !!
        </button>

        <button
          className={`button_priority ${selectedPriority === '!!!' ? 'selected-button' : ''}`}
          onClick={() => handleButton('!!!')}
        >
          !!!
        </button>
      </div>
      <div className="buttons_duration">
        <button className="save_button" onClick={saveHandler}>
          Save
        </button>
        <button className="cancel_button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddPriority;
