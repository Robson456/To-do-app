import React, {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';


const ToDoList = () => {
    const {tasks} = useContext(TaskContext);
    return ( 
        <div className="container">
            <ul>
                {tasks.map(task =>{
                    return(
                        <li key={task.id}>{ task.title }</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default ToDoList;