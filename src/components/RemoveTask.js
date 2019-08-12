import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

const RemoveTask = ({task}) => {
    const {dispatch} = useContext(TaskContext);
    return ( 
        <li onClick={()=> dispatch({type: 'REMOVE_TASK', id: task.id})}>
            <div className="title">{task.title}</div>
        </li>
     );
}
 
export default RemoveTask;