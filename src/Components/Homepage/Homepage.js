import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import Event from '../Events/Event.js'
import Timeline from '../Timeline/Timeline.js'
import Spline from "@splinetool/react-spline";
import HomeGallery from './home-gallery/homeGallery.js'
import Timer from '../Timer/Timer'


const Homepage = () => {
  return (
    <div className='home'>

     <Spline scene="https://prod.spline.design/8TF6sYqBVRN3uBba/scene.splinecode" />

      <Timer />
      <Event />
      <Timeline />
      <div className='gallery-carousel'>
      <HomeGallery/>
      <Link to='/gallery'>
      <button className='gallery-btn'>MORE</button>
      </Link>
      </div>
    </div>
  )
}


export default Homepage
