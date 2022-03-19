

import React from 'react'
import Annoucement from '../components/Annoucement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import './Success.css'

const Success = () => {
  return (
      
    <div >
    <Annoucement/>
        
        <div className='success'>
    <span>Successfull</span>
    </div>
    <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Success