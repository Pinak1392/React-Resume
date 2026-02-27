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

function App() {
  return (
    <Router basename='/React-Resume'>
      <Routes>
        <Route path='' element={<Background preset={0} />}/>
        <Route path='/Resume' element={<Background preset={0} />}/>
        <Route path='/Employment' element={<Background preset={0} />}/>
        <Route path='/Education' element={<Background preset={1} />}/>
      </Routes>
      < Nav />
      <Routes>
        <Route path='' element={<Resume/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Employment' element={<Employment/>}/>
        <Route path='/Education' element={<Education/>}/>
      </Routes>

    </Router>
  )
}

export default App
