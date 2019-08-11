import React, {useContext} from 'react'
import {TaskContext} from '../contexts/TaskContext'

const Navbar = () => {
    const {tasks} = useContext(TaskContext);
    return ( 
        <div className="navbar">
            <h1>To Do App</h1>
            <p>{tasks.length}task's to do</p>
        </div>
     );
}
 
export default Navbar;