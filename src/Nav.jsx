import { Link } from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import closeButton from './assets/closeButton.png';

function Nav({ theme, setTheme }) {
  const [modalActive, setModalActive] = useState(false);

  const changeTheme = ({target}) => {
    setTheme(parseInt(target.value));
  }

  return (
    <>
    <nav>
      <h1>Pinak Limaye</h1>
      <ul>
        <li className='NavLi'><Link to='/Resume'>Resume</Link></li>
        <li className='NavLi'><Link to='/Employment'>Employment</Link></li>
        <li className='NavLi'><Link to='/Education'>Education</Link></li>
        {/* <li className='NavLi'><Link to='/Skills'>Skills</Link></li> */}
        <li className='NavLi' id='ThemeNav'><a onClick={() => {
          setModalActive(true);
        }}>Themes</a></li>
      </ul>
    </nav>

    <div id='ThemeModal' className={modalActive ? '' : 'hidden'}>
      <div id='ThemeModalInner'>
        <img className='ThemeModalClose' src={closeButton} onClick={() => {
          setModalActive(false);
        }}/>
        <h2>Choose a Theme:</h2>
        <div className='ThemeButtons'>
          <button className={`ThemeButton ${theme === 0 ? 'ThemeButtonActive' : ''}`} value={0} onClick={changeTheme}>Bubble</button>
          <button className={`ThemeButton ${theme === 1 ? 'ThemeButtonActive' : ''}`} value={1} onClick={changeTheme}>Snake</button>
          <button className={`ThemeButton ${theme === 2 ? 'ThemeButtonActive' : ''}`} value={2} onClick={changeTheme}>None</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav