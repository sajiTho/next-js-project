import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'


const about = () => {
    return (
      <div>
          <Hero heading='About' message='Submit the form below for more work and quotes.' />
          <Portfolio/>
      </div>
    )
  }

export default about
