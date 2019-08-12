import React from 'react';
import TaskContextProvider from './context/TaskContext';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <TaskContextProvider>
        <ToDoList/>
      </TaskContextProvider>
    </div>
  );
}

export default App;
