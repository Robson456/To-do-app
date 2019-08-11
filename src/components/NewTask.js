import React, {useContext, useState} from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewToDoForm = () =>{
    const {addTask} = useContext(TaskContext);
    const [title, setTitle] = useState('');

    const submitHandle= (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    }

    return(
        <form onSubmit={submitHandle}>
            <input type="text" placeholder="new task" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="add task"/>
        </form>
    );
}
export default NewToDoForm;