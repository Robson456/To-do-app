import React, {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';
import RemoveTask from './RemoveTask';

const ToDoList = () => {
    const {tasks} = useContext(TaskContext);
    return ( 
        <div className="toDoList">
            <ul>
                {tasks.map(task =>{
                    return(
                        <RemoveTask task={task} key={task.id}/>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default ToDoList;