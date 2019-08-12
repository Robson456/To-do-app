import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

const Navbar = () => {
    const {tasks} = useContext(TaskContext)
    return ( 
        <div className="navbar">
            <h1>To Do's</h1>
            <p>You got {tasks.length} task to do</p>
    
        </div>
     );
}
 
export default Navbar;
