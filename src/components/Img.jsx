import React from 'react'
import heroimg from "../assets/heroimg.png"
import "./Img.css"

function Img() {
  return (
    <div className='heroimg'>
        <img src={heroimg} alt="" />
    </div>
  )
}

export default Img