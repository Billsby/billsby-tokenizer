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
            <span className="t-logo">Card Tokenizer</span>
          </Link>
          <button class={`toggle-menu burger-close ${toggleMenu && 'burger-open'}`} onClick={handleToggleMenu}>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div className={`menu-holder ${toggleMenu && 'menu-open'}`}>
            <button className="btn-white">Download on Github</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header