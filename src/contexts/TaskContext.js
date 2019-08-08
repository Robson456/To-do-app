import React, {createContext, useReducer, useEffect} from 'react'
import {taskReducer} from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, ['do sth'], ()=>{
        const localData =localStorage.getItem('tasks');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])
    return(
        <TaskContextProvider value={{tasks, dispatch}}>
            {props.children}
        </TaskContextProvider>
    );
}
export default TaskContextProvider;