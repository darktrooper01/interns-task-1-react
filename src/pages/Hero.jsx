import React from 'react'
import "./Hero.css"
import Button from '../components/Button.jsx'
import Nav from '../components/Nav.jsx'
import Img from '../components/Img.jsx'
import About from './About.jsx'
import Services from './Services.jsx'

function Hero() {
  return (




    <div>
        <Nav />
        <h3 className='head'>VERTEX <br />
        TECHNOLOGIES</h3>

       <p className='txt1'>
        At the intersection of design, technology, and strategy, Vertex creates <br /> modern 
         digital experiences that are fast, scalable, and visually refined. <br /> We focus on building 
         intuitive interfaces and powerful solutions that <br /> help brands grow, connect, and
          stand out in an ever-evolving digital world.
       </p>
        
        <Button />
        <Img/>
        <About />
        <Services />
    </div>
  )
}

export default Hero