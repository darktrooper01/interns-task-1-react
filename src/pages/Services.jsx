import React from 'react'
import "./Services.css"

function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Building responsive and modern websites."
        },
        {           

            title: "Mobile App Development",                
            description: "Creating user-friendly mobile applications."
        },
        {
            title: "Digital Marketing",             
            description: "Promoting your brand through digital channels."
        }
    ];

  return (
    <div>
        <h3 className='head5'>OUR <br />
        SERVICES</h3>



         <div className='cardmain'>
        {services.map((service, index) => (
            <div key={index} className='card'>
                <h3 className='card-title'>{service.title}</h3>
                <p className='card-description'>{service.description}</p>
            </div>
        ))}
         </div>
    </div>
  )
}

export default Services