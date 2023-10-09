import React, { useState, useRef, useEffect } from 'react';
import AddListChecked from './AddListChecked';
import check from './images/assets/check.svg';

const AddList = ({task, onUpdateStatus}) => {
  const { id, title, status, edited_at, newTitle, newStatus } = task;
  const [listInput, setListInput] = useState('');
  const inputRef = useRef(null);
  const [inputs, setInputs] = useState(newTitle);
  const [statusInput, setStatusInput] = useState(status);

  const checkboxHandler = () => {
    const newStatus = statusInput === 'To Do' ? 'Done' : 'To Do';
    setStatusInput(newStatus);
    

    const updatedTask = { ...task, newStatus: statusInput };
    onUpdateStatus(updatedTask);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const updatedInputs = [...inputs, listInput];
      setInputs(updatedInputs);

      const updatedTask = { ...task, newTitle: inputs};
      onUpdateStatus(updatedTask);

      setListInput('');
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div>
        {inputs.map((value, index) => (
          <AddListChecked key={index} value={value} task={task} onUpdateStatus={onUpdateStatus} inputs={inputs}/>
        ))}
      </div>
      <div className='checkbox__area'>
        <button className='checkbox__round' onClick={checkboxHandler}>
          {statusInput === 'Done' && <img src={check} alt="Check" width="10px" />}
        </button>
        <input
          type="text"
          value={listInput}
          onChange={(e) => setListInput(e.target.value)}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          className='input_list'
          statusInput={statusInput}
          setStatusInput={setStatusInput}
          style={{ textDecoration: statusInput === 'Done' ? 'line-through' : 'none' }}
        />
      </div>
    </>
  );
};

export default AddList;
