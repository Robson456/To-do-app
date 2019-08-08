import React from 'react';
import TaskContextProvider from './contexts/TaskContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <TaskContextProvider>
       <Navbar/>
     </TaskContextProvider>
    </div>
  );
}

export default App;
