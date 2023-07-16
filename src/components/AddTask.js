import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            status: 'To Do'
        }

        onAddTask(newTask);

        setTitle('');
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='New task'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddTask;