import React from 'react'
import "./Navbar.css"
import {GrEdge} from "react-icons/gr"
import {BiSolidBookReader} from "react-icons/bi"
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <h2>
            <span><GrEdge/></span>Grese
        </h2>

        <div className='nav-links'>
            <ul className='desk-links'>
            <li>
                <a href='#'>About us</a>
            </li>
            <li>
                <a href='#'>Technology</a>
            </li>

            <li>
                <a href='#'>Case studies</a>
            </li>
            <button className='btn'>Let's Tallk</button>
           </ul>

        </div>
    </nav>
    <section className='hero-section'>
    <div className='wrapper'>
        <div className='hero-data'>
          <h1>Unleashing <br/> the Power of <br/> Automation</h1>
         <p>
           <span>We revolutionize the way tomatoes are grown and</span>
            <span>monitiored, enabling  efficient and precise data</span> 
            <span>collection for improved crop management.</span>
         </p>
            <input type='text' placeholder='e.g hello@creative.com'/>
            <button><span><BiSolidBookReader/></span>Book a demo</button>
            {/* <div className='boota'>
            <img src='./Boota.jpg' alt='Boota'/>
            </div> */}

        </div>
        <div className='boota'>
            <img src='./Boota.jpg' alt='Boota'/>
        </div>

    </div>
    </section>
    </>
  )
}

export default Navbar
