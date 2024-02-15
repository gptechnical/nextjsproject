'use client'
import React from 'react'
import About from './about/page';
import Services from './service/page';
import Contact from './contact/page';
import Counter from './counter/page';

const Home = () => {
  return (
    <div>
      <About/>
      <Services/>
      <Counter/>
      <Contact/>
    </div>
  )
}

export default Home