import React from 'react'
import "./Hero.css"
import Button from '../components/Button.jsx'

function Hero() {
  return (
    <div>
        <h3 className='head'>VERTEX <br />
        TECHNOLOGIES</h3>

       <p>
        At the intersection of design, technology, and strategy, Vertex creates modern digital experiences that are fast, scalable, and visually refined. We focus on building intuitive interfaces and powerful solutions that help brands grow, connect, and stand out in an ever-evolving digital world.
       </p>

        <Button />
    </div>
  )
}

export default Hero