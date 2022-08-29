import React from 'react';
import '../stylesheets/tasks.css';
import { AiOutlineCloseCircle} from "react-icons/ai";


function Task ({id, text, completed, completeTask, removeTask }){
    return(
    <div className={completed ? 'task-container completed':'task-container'}>
        <div 
        className='task-text'
        onClick={() => completeTask (id)}>
            {text}
        </div>
        <div 
            className='task-container-icons'
            onClick={() => removeTask(id)}>
            <AiOutlineCloseCircle className='task-icon' />

        </div>
    </div>
);
}

export default Task;