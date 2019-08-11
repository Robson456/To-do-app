import React from 'react';
import TaskContextProvider from './contexts/TaskContext';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewTask';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
       <Navbar/>
       <ToDoList/>
       <NewToDoForm/>
     </TaskContextProvider>
    </div>
  );
}

export default App;
