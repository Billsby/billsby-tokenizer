import React, { useState } from "react";
import {Link} from 'react-router-dom';

import siteLogo from '../assets/images/logo.svg'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(0)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="navbar-logo">
            <img src={siteLogo} className="logo" alt="Billsby" />
            <span className="t-logo">Card Tokenizer (React)</span>
          </Link>
          <button className={`toggle-menu burger-close ${toggleMenu && 'burger-open'}`} onClick={handleToggleMenu}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className={`menu-holder ${toggleMenu && 'menu-open'}`}>
            <a href="https://github.com/Billsby/billsby-tokenizer-react/archive/master.zip" className="btn-white" download>Download on Github</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header