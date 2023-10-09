import React, {useState} from 'react';
import plusimage from './images/assets/plusimage.svg';


const AddTask = ({onAddTask}) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('');
    const [duration, setDuration] = useState('');
    const [newTitle, setNewTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() !== '') {
            const newTask = {
              id: Date.now().toString(),
              title: title.trim(),
              description: '',
              status: 'To Do',
              duration: '',
              priority: '',
              deadline: '',
              created_at: Date.now(),
              edited_at: Date.now(),
              newStatus: 'To Do',
              newTitle: [],
            };

            onAddTask(newTask);
            setTitle('');
            setDuration('');
            setPriority('');
            setDeadline('');
        }


    }

    return (
        <>
            <form className="form_addtask" onSubmit={handleSubmit}>
                <div className="div_addtasks">
                    <div className="content__form">
                        <input
                        placeholder="  New task"
                        className="input_task"
                        type="text"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                        <button className="button_addtask" type="submit"><img class="image_addtask" src={plusimage} /></button>
                    </div>


                </div>

            </form>

        </>
    )
}


export default AddTask;