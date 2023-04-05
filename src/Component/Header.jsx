import React from 'react';
import 'bulma/css/bulma.css'
import '../styles/Header.css'

const header = () => {
  return (
    <header className='container'>
       <nav className="nav">

          <div className="nav-left">
              <span className="nav-item">
                <img src="src\assets\logo.svg" alt="" srcSet="" />
              </span>
          </div>


          <div className="nav-right nav-menu">
            <a href="#" className="nav-item">Features</a>
            <a href="#" className="nav-item">Team</a>
            <a href="#" className="nav-item">Sign in</a>
          </div>

        </nav>
    </header>
  )
}

export default header