import React, { useState } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    return (
        <>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} />
        </>
    )
}

export default TaskManager;
