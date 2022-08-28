import React from 'react';
import '../stylesheets/TaskForm.css';

function TaskForm (props) {
    return(
    <form className='task-form'>
        <input 
            className='task-input'
            text='text'
            placeholder='Write your task here'
            name='text'/>
        
        <button className='task-button'>
            Add task
        </button>
    </form>
    );
};

export default TaskForm