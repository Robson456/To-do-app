import React, { useContext } from 'react';
import ToDo from './ToDo';
import {TaskContext} from '../contexts/TaskContext';

const ToDoList = () =>{
    const {tasks} = useContext(TaskContext);
    return tasks.length ? (
        <div className="toDo-list">
            <ul>
                {tasks.map(task => {
                    return ( <ToDo task={task} key={task.id}/>);
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No to do's left</div>
    ) 
}

export default ToDoList;