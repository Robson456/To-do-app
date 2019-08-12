import React, {createContext, useState} from 'react'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'do react', id: 1},
        {title: 'do dishes', id: 2}
    ]);
    return (
        <TaskContext.Provider value={{tasks}}>
            {props.children}
        </TaskContext.Provider>
      );
}
 
export default TaskContextProvider;