import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaChartPie,FaHome} from 'react-icons/fa'
function Navbar() {
  return (
    <>
    <div className='navcolor'>
    <nav>
    <Link to='/' className='a active'> <FaHome/></Link>
    <Link to='/Budget' className='a active'> <FaChartPie/></Link>
    {/* <Link to='/' className='active'> <FaAddressCard/></Link>   */}

    </nav>
    </div>
    </>
  )
}

export default Navbar