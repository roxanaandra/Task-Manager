import React,{useState, useEffect} from 'react';
import check from './images/assets/check.svg';
import moment from "moment";


const TaskItemChecked = ({ task, onUpdateStatus }) => {
    const { id, title, status, edited_at } = task;
    const [timeAgo, setTimeAgo] = useState(moment(edited_at).fromNow());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTimeAgo(moment(edited_at).fromNow());
        }, 60000);

        return () => clearInterval(intervalId);
    }, [edited_at]);

    const handleUpdateStatus = () => {
        const updatedStatus = { ...task, status: status === 'To Do' ? 'Done' : 'To Do' };
        onUpdateStatus(updatedStatus);
    };


    return (
        <div className='div_newtask'>
            <div className='checked_element'>
            <div className='check-container'>
                <button className='checkbox_rotunddiv' onClick={handleUpdateStatus}>
                    {status === 'To Do' ? null : <img src={check} width="15" />}
                </button>
            </div>
            <div className='task-content'>
                <div className='title' style={{ textDecoration: 'line-through' }}>
                    {title}
                </div>
                <div className='check_completed' style={{ textDecoration: 'none'}}>
                    Completed {timeAgo}
                </div>
            </div>
            </div>
        </div>
    );
};


export default TaskItemChecked;