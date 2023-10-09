import React, { useState, useEffect } from 'react';
import check from './images/assets/check.svg';
import x from './images/assets/x.svg';
import listimage from './images/assets/listimage.svg';
import clock from './images/assets/clock.svg';
import calendarimage from './images/assets/calendarimage.svg';
import Modal from './Modal';
import flag from './images/assets/flag.svg';
import moment from 'moment';
import AddList from './AddList';


const TaskItem = ({ task, onDeleteTask, onUpdateStatus}) => {
  const { id, title, description, status, newTitle, priority, duration, deadline, created_at, edited_at } = task;
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [anotherImage, setAnotherImage] = useState(false);
  const [isDescription, setIsDescription] = useState(task.description);
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState(new Date());
  const [activeComponent, setActiveComponent] = useState('');
  const [showIcons, setShowIcons] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(false);
  const [selectedDeadline, setSelectedDeadline] = useState(null);
  const [chosenDate, setChosenDate] = useState(deadline);
  const [saveClicked, setSaveClicked] = useState(false);
  const [durationValue, setDurationValue] = useState('');
  const [selectedAddPriority, setSelectedAddPriority] = useState('');
  const [visibleAddList, setVisibleAddList] = useState(false);


  const handleDateSelected = (date) => {
    setChosenDate(date);
  };
  


  const handleMouseOver = () => {
    setShowIcons(true);
    setVisibleDescription(true);
  };

  

  const handleMouseOut = () => {
    setShowIcons(false);

    if (description === '') {
      setVisibleDescription(false);
    } else {
      setVisibleDescription(true);
    }

  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleUpdateStatus = () => {
    const updatedStatus = { ...task, status: status === 'To Do' ? 'Done' : 'To Do', edited_at: Date.now() };
    onUpdateStatus(updatedStatus);
};

const handleModalValueChange = (newValue) => {
  setModalValue(newValue);
  setSelectedDeadline(newValue); // Update the selected date
  const updatedStatus = { ...task, deadline: newValue };
  onUpdateStatus(updatedStatus);
};


  useEffect(() => {
    if (openModal) {

      setModalValue(new Date());
    }
  }, [openModal]);

  const handleModal = (selectedComponent) => {
    setActiveComponent(selectedComponent);
    setOpenModal(true);
  };

  const handleSetDescription = (event) => {
  setIsDescription(event.target.value);

}

useEffect(() => {
  const updatedStatus = { ...task, title: editedTitle };
  onUpdateStatus(updatedStatus);
}, [editedTitle]);
useEffect(() => {
  const updatedStatus = { ...task, description: isDescription };
  onUpdateStatus(updatedStatus);
}, [isDescription]);


const addListHandler = () => {
  setVisibleAddList(true);
}
useEffect(() => {
  if(newTitle.length > 0) { 
    setVisibleAddList(true);
  }
}, [newTitle]);



  return (
    <div className="div_newtask">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  className="newtask_element">
        <div className="container-icone">
          <div className="checkbox_div">
            <button onClick={handleUpdateStatus} className="checkbox_rotunddiv">
                {status === 'To Do' ? null : <img src={check} width="15" />}
            </button>
            <input
              className="edited_title"
              value={editedTitle}
              type="text"
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>
          <div>
            {showIcons && <img onClick={handleDelete} className="image_x" src={x} alt="Delete" />}
          </div>
        </div>
        <label>
          <div className='description'>
        <textarea
            id="textarea_description"
            placeholder="Description"
            value={isDescription}
            onChange={handleSetDescription}
            className={description === '' ? 'empty' : ''}
          ></textarea>
          </div>
          { visibleAddList &&
          <div>
            <AddList onUpdateStatus={onUpdateStatus} task={task}/>
          </div>}
        </label>
        <div  id="icons" className='icons'>
          <img onClick={addListHandler} className="image_icon" src={listimage} alt="List" />
          <img onClick={() => handleModal('priority')}  className={selectedAddPriority === '' ? 'image_icon' : 'controllers-btn'} src={flag} alt="Flag" />
          { selectedAddPriority !== '' &&
          <div className='priority_value'>{selectedAddPriority}</div>}
          <img onClick={() => handleModal('duration')} className={durationValue === '' ? 'image_icon' : 'controllers-btn'} src={clock} alt="Clock" />
          { durationValue !== '' && <div className='duration_value'>{durationValue}</div>}
          <img onClick={() => handleModal('deadline')} className={deadline === '' ? 'image_icon' : 'controllers-btn'}src={calendarimage} alt="Calendar" />
          {deadline !== '' && <div className='moment_time'>{moment(chosenDate).fromNow()}</div>}
        </div>
        <div>
        <Modal  onUpdateStatus={onUpdateStatus} activeComponent={activeComponent} open={openModal} onClose={() =>setOpenModal(false)} onModalValueChange={handleModalValueChange} 
         setOpenModal={setOpenModal} task={task} onDateSelected={handleDateSelected} setSaveClicked={setSaveClicked} setDurationValue={setDurationValue} setSelectedAddPriority={setSelectedAddPriority}
         />
        </div>
        <div>

        </div>
      </div>


      <div>
      </div>
    </div>
  );
};

export default TaskItem;
