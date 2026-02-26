import { Link } from 'react-router-dom'
import './App.css'

function Nav() {
  return (
    <nav>
      <h1>Pinak Limaye</h1>
      <ul>
        <li className='NavLi'><Link to='/Resume'>Resume</Link></li>
        <li className='NavLi'><Link to='/Employment'>Employment</Link></li>
        <li className='NavLi'><Link to='/Education'>Education</Link></li>
        <li className='NavLi'><Link to='/Skills'>Skills</Link></li>
      </ul>
    </nav>
  )
}

export default Nav