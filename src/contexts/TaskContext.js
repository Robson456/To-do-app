import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'learn react', id: 1},  
        {title: 'clean room', id: 2}
    ]);
    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuid()}])
    };
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    return(
        <TaskContextProvider value={{tasks, addTask, removeTask }}>
            {props.children}
        </TaskContextProvider>
    );
}
export default TaskContextProvider;