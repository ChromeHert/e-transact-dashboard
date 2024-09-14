import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <div className={`${darkMode && "dark"}`}>
    <Header toggleDarkMode={toggleDarkMode}
      darkMode={darkMode}
      toggleSidebar={toggleSidebar}/>

      <Sidebar isSidebarOpen={isSidebarOpen}/>
     </div> 
    </>
  );
};

export default App;