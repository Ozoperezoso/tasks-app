import React, {useState} from 'react';
import '../stylesheets/TaskList.css'
import TaskForm from './TaskForm';
import Task from './tasks'


function TaskList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()){
            task.text = task.text.trim();
            
            const taskUpdated = [task, ...tasks]
            setTasks(taskUpdated);
        }
    };

    const removeTask = id =>{
        const taskUpdated = tasks.filter(task => task.id!== id);
        setTasks (taskUpdated);
    };

    const completeTask = id=>{
        const taskUpdated = tasks.map (tasks =>{
            if (tasks.id === id){
                tasks.completed = !tasks.completed;
            }
            return tasks
        });
        setTasks(taskUpdated);
    };

    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
              {
                tasks.map((task) =>
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        removeTask={removeTask}
                        completeTask={completeTask} />
                )
              }
            </div>
        </>


    );
}

export default TaskList