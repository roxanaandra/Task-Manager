import React, {useState} from 'react';
import TaskItem from './TaskItem';
import downIcon from './images/assets/downIcon.svg';
import TaskItemChecked from './TaskItemChecked';


const TaskList = ({tasks, onDeleteTask, onUpdateStatus}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    const handleDeleteTask = (taskId) => {
        onDeleteTask(taskId);
    };

    const tasksToDo = tasks.filter(task => task.status === "To Do");
    const tasksDone = tasks
        .filter(task => task.status === "Done")
        .sort((a, b) => new Date(b.edited_at) - new Date(a.edited_at));

    //const handleUpdateTask = (updatedStatus) => {
       // onUpdateStatus(updatedStatus);
    //};

    const handleOpenToDo = () => {
        setAccordionOpen(false);
    };
    const handleOpenDone = () => {
        setAccordionOpen(true);
    };

    return (
        <>
        <div className="tasks-title">
                <div onClick={handleOpenToDo} className="taskslist">
                    <div class="tasks">
                        Tasks {tasksToDo.length > 0 && ` (${tasksToDo.length})` } 
                    </div>
                    <div>
                        {!accordionOpen && <img className='downicon' src={downIcon} width="10" /> }
                    </div>
                </div>
            </div>
            {!accordionOpen && (
                <div className="to-do">
                    {tasksToDo.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onDeleteTask={onDeleteTask}
                            onUpdateStatus={onUpdateStatus}
                            
                        />
                    ))}
                </div>
            )}

           <div className="tasks-title">
                <div onClick={handleOpenDone} className='taskslist'>
                    <div className="tasks">
                        Completed {tasksDone.length > 0 && ` (${tasksDone.length})` }
                    </div>
                    <div>
                        {accordionOpen && <img src={downIcon} width="15" /> }
                    </div>
                </div>
            </div>
            {accordionOpen && (
                <div className="completed">
                    {tasksDone.map((task) => (
                        <TaskItemChecked
                            key={task.id}
                            task={task}
                            onUpdateStatus={onUpdateStatus}
                        />
                    ))}
                </div>
            )}
        
        </>
    )
}

export default TaskList;