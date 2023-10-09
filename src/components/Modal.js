import React from 'react';
import AddDeadline from './AddDeadline';
import AddDuration from './AddDuration';
import AddPriority from './AddPriority';



const Modal = ({ open, onClose, activeComponent, onModalValueChange, onUpdateStatus, setOpenModal, task, deadline, onDateSelected, setSaveClicked, setDurationValue, setSelectedAddPriority }) => {



    if (!open) return null;
    return (
        <>
        <div className='overlay'>
        <div className='modalContainer'>

          {activeComponent === 'deadline' ? (
     <AddDeadline onClose={onClose} onModalValueChange={onModalValueChange} setOpenModal={setOpenModal} onUpdateStatus={onUpdateStatus} task={task} deadline={deadline} onDateSelected={onDateSelected} setSaveClicked={setSaveClicked}/>
    ) : activeComponent === 'duration' ? (
    <AddDuration onClose={onClose} onUpdateStatus={onUpdateStatus} setOpenModal={setOpenModal} setDurationValue={setDurationValue} />
    ) : activeComponent === 'priority' ? (
    <AddPriority onUpdateStatus={onUpdateStatus} onClose={onClose} setOpenModal={setOpenModal}  setSelectedAddPriority={setSelectedAddPriority} />
    ) : null}
        </div>
      </div>
        </>
    )
}

export default Modal;