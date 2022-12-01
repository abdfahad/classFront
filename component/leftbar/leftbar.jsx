import React from 'react'
import Image from 'next/image';
import noprofile from "../../lib/images/noprofile.svg";
const Leftbar = () => {
  return (
    <>
    <div className='leftbar--header'>
    <h2><span className='leftbar--header--1'>O</span>
    <span className='leftbar--header--2'>C</span>
    <span className='leftbar--header--3'>D</span></h2>
    </div>
    <div className='leftbar--bottom'>
    <div className="nav-container">
    <ul className='nav-list'>
    <li><a href="#" className='nav-links--1'>Dashboard</a></li>
    <li> 
    <a  className='nav-links' href="#">chat</a>
    </li>
    <li>
    <a href="#" className='nav-links'>broadcast</a>
    </li>
    <li>
    <a href="#" className='nav-links'>resources</a>
    </li>
    </ul>
    </div>
    <div className='image-container'>
    <Image className='img sm-bm' src={noprofile} alt="profile" width={100} height={100} />
    </div>
    </div>
    </>
  )
}

export default Leftbar;