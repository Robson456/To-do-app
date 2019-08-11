import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const ToDo = ({task}) => {
    const {removeTask} = useContext(TaskContext);
    return(
        <li onClick={() => removeTask(task.id)}>
            <div className="title">{task.title}</div>
        </li>
    )
}
export default ToDo;