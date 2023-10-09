import React, {useEffect, useState} from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';




const TaskManager = ({handleClickButton, anotherImage}) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks]);


    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);

    }

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleUpdateStatus = (updatedTask) => {
        const updatedStatus = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedStatus);
    };


    return (
        <>
         <AddTask onAddTask={handleAddTask} tasks={tasks}/>
         <TaskList tasks={tasks}
         onDeleteTask={handleDeleteTask}
         onUpdateStatus={handleUpdateStatus}
         
         />
         
        </>
    )
}

export default TaskManager;