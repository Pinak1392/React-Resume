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

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Background />
      < Nav />
      <Routes>
        <Route path='' element={<Resume/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Employment' element={<Employment/>}/>
      </Routes>

    </Router>
  )
}

export default App
