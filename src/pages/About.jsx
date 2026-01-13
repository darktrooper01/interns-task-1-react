import React from 'react'
import "./About.css"
import Img2 from '../components/Img2.jsx'

function About() {
  return (
    <div>
        <h3 className='head2'>ABOUT <br />
        VERTEX</h3>
        <p className='parag2'>Vertex creates digital solutions that blend creativity and technology. <br />
         We focus on building intuitive, visually appealing websites and <br />
          applications that help businesses grow and stand out.</p>


           <Img2 />

          <h3 className='head4'>OUR <br />
          MISSION</h3>

          <p className='parag4'>
            At Vertex, our mission is to empower brands through smart, modern, and scalable digital 
            solutions. We aim to create experiences that engage users and leave a lasting impression.
          </p>
        
    </div>

  )
}

export default About