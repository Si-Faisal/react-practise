import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Bars3Icon ,XMarkIcon } from '@heroicons/react/24/solid'
import Rechart from './ReChart/Rechart';

function App() {


  const [show, setShow] = useState(true);
  const [menu, setmenu] = useState(true);
  const menuChange = () => {
    
  }

  return (
    <div className="App">
      <nav className='p-5 header-part'>
        <p className='d-lg-none' onClick={() => setmenu(!menu)}>
          {
            menu ? <XMarkIcon className=' menubar'></XMarkIcon> : <Bars3Icon className=' menubar'></Bars3Icon>
          }
        </p>

        <ul className={`d-lg-flex menu-item position-absolute   text-sucess ${menu ? 'top-25 ' : 'd-none '}`} >

          <li>
            <a href="./contact">contact</a>

          </li>
          <li>
            <a href="./Home">Home</a>
          </li>
          <li>
            <a href="./About">About</a>

          </li>
          <li>
            <a href="./Home">Details</a>

          </li>
        </ul>
      </nav>

      

     

     
      <Rechart></Rechart>
    </div>
  )
}

export default App
