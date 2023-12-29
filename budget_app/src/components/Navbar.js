import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaChartPie, FaHome, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className='navcontainer' >
        <header>Hello User!</header>
        <nav>
          <div className='maincnt'>
            <div className='cnt'>
            {showNav ? (
                <FaTimes className='icon' onClick={toggleNav}></FaTimes>
              ) : (
                <FaBars className='icon' onClick={toggleNav}></FaBars>
              )}
              {showNav ? (
                <div className='menuContent'>
                  
                  <Link to='/' className='ai'>
                    <FaHome />
                  </Link>
                  <Link to='/Budget' className='ai'>
                    <FaChartPie />
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
