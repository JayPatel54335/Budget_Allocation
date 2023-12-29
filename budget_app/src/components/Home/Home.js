import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './Home.css';
import Navbar from '../Navbar';

const Home = () => {

    return (
        <div className='strt'>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossorigin="anonymous"></link>
            <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

            </link>
            
            <Navbar />
            <div className='main'>
                <div className='perenttext'>
                    <p className='childtext'><span><b>Welcome To Budget Allocation App <br /></b></span>
                        A Budget Allocation Website is an online platform designed to help individuals,
                        businesses, organizations, and government agencies efficiently manage their finances
                        by allocating funds to various categories, projects, or expenses.
                        This digital tool provides users with an organized and user-friendly interface to plan, track,
                        and control their financial resources effectively.
                        <br />
                        <span className='cli'>Click on Lets'Go Button or use navbar to <b> Naviagte Budget Allocaion App.</b></span>
                        <br />
                        <div className="mbtt">
                            <Link to='/Budget'><button className=' btn-warning'>Lets's Go</button> </Link>                            
                            </div> 
                    </p>
                </div>
                {/* <button  className=' btn-warning' onClick={budget}>Let's Go</button>  */}
            </div>
            <div className='foo' id='About'>
                <div className='aboutop'>
                    <div className='about'>About</div>
                    <p> This Web site is develope with React technology.</p>
                    <p style={{ fontSize: "24px" }}> &copy;2023 </p>

                </div>
                <div className='dev'>
                    <div className='devt'> Devloper Information</div>
                    <div className='devd'>My self Patel Jay.<br />
                        I'm pursuing B.E in Informtion & Technology.<br />
                    </div>
                    <div className='icon'>
                        <a href="https://www.linkedin.com/in/jay-patel-15oct/">
                            <FaLinkedin size={28} /></a>
                        <a href="https://github.com/JayPatel54335">
                            <FaGithub size={28} /></a>
                        <a href="mailto:jaypatel54335@gmail.com">
                            <FaEnvelope size={28} /></a>

                    </div>
                </div>
                <div className='address'>
                    <div className='addt'>Address</div>
                    <div className='addd'>19, 20, opp. Science City,<br />
                        Sola, Ahmedabad,<br />
                        Gujarat-380060</div>
                    <div className='loc'>
                        <a className='FaLocationArrow'
                            href='https://www.google.co.in/maps/place/SAL+EDUCATION/@23.0835632,72.4943061,18z/data=!4m6!3m5!1s0x395e9ce9f10b8a91:0xa8410c710a10a39c!8m2!3d23.083563!4d72.4956079!16s%2Fg%2F11f2xm_rgs?entry=ttu'>
                            <FaLocationArrow  size={28} /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home