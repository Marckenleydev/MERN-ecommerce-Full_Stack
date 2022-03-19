import React from 'react'
import Annoucement from '../components/Annoucement'
import Categories from '../components/Categories'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import  Products  from '../components/Products'
import Slide from '../components/Slide'
import "./Home.css"



function Home() {
  return (
    <div className='Home'>
        <Annoucement/>
        <Navbar/>
        <Slide/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home