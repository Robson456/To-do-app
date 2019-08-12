import React, {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'

const NewTaskForm = () =>{
    const {dispatch} = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const submitHandle = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TASK', task:{
            title
        }});
        setTitle('');
    }
    return (
        <form onSubmit={submitHandle}>
            <input type="text" placeholder="Add new task" value={title}
            onChange={(e) => setTitle(e.target.value)} required/>
            <button type="submit" >Add task</button>
        </form>
    )
}

export default NewTaskForm;

