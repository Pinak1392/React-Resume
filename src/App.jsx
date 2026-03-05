import { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route,
} from "react-router-dom";
import './App.css'
import Nav from './Nav'
import Resume from './Resume';
import Employment from './Employment';
import Background from './Background';
import Education from './Education';
import Projects from './Projects';

function App() {
  const [theme, setTheme] = useState(2);

  return (
    <Router basename='/React-Resume'>
      <Background preset={theme}/>
      < Nav theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path='' element={<Resume/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Employment' element={<Employment/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>

    </Router>
  )
}

export default App
