'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import '../../../styles/custom.css';

const About = () => {
  const router = useRouter();
  return (
    <>
    <div className='box_one'>
    <div className='container box'>
    <div className='row'>
      <div className='col-md-6 col-sm-6 col-lg-6'>
        <div className='box_left'>
         <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse euismod quis metus nec volutpat. Pellentesque 
          auctor vestibulum elementum. Nullam lobortis enim vitae 
          lectus auctor, non vehicula neque aliquet. Aliquam non 
          augue et lectus sodales varius. Donec iaculis nec elit a mollis. 
          </p>
          <button className='btn_text' onClick={()=>router.push("/")}>Go to Home page</button>
          </div>
      </div>
      <div className='col-md-6 col-sm-6 col-lg-6'>
      <div className='box_right'>
        <img src='laptop.png' style={{width: "100%"}}/>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default About

