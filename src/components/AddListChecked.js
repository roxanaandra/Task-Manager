import React, { useState, useEffect } from 'react';
import check from './images/assets/check.svg';

const AddListChecked = ({ value, task, onUpdateStatus, inputs }) => {
  const { id, title, status, edited_at, newTitle, newStatus } = task;
  const [statusInput, setStatusInput] = useState(status);
  const [inputSubtask, setInputSubtask] = useState(value);

  const checkedInputHandler = () => {
    const newStatus = statusInput === 'To Do' ? 'Done' : 'To Do';
    setStatusInput(newStatus);

    const updatedTask = { ...task, newStatus: statusInput };
    onUpdateStatus(updatedTask);
  };



  return (
    <>
    <div className='list_checked'>
      <div>
        <button className='checkbox__round' onClick={checkedInputHandler}>
          {statusInput === 'Done' && <img src={check} alt="Check" width="10px" />}
        </button>
      </div>
      <div>
        <input
          type="text"
          value={inputSubtask}
          style={{textDecoration: statusInput === 'Done' ? 'line-through' : 'none' }}
          className='input_list'
          onChange={(e)=> setInputSubtask(e.target.vaue)}
        />
      </div>
    </div>
    </>
  );
};

export default AddListChecked;
