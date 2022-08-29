import React, {useState} from 'react';
import '../stylesheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm (props) {

    const [input, setInput] = useState('');

    const manageChange = e => {
        setInput(e.target.value);
    
    }
    const manageSent = e => {
        e.preventDefault();

        const newTask = {
            id:uuidv4(),
            text:input,
            completed: false
        };

        props.onSubmit(newTask);
    };
    return(
    <form 
        className='task-form'
        onSubmit={manageSent}>
        
    <input 
            className='task-input'
            text='text'
            placeholder='Write your task here'
            name='text'
            onChange={manageChange}
            />
        
        <button className='task-button'>
            Add task
        </button>
    </form>
    );
};

export default TaskForm