import React from 'react';
import TaskContextProvider from './context/TaskContext';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import NewTaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      
      <TaskContextProvider>
        <Navbar/>
        <NewTaskForm/>
        <ToDoList/>
      </TaskContextProvider>
    </div>
  );
}

export default App;
