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

<Spline scene="https://prod.spline.design/c4ax6hU2dzwVPrrw/scene.splinecode" />

      <Timer />
      <Event />
      <Timeline />
      <div>YHA KUCH IMAGES LAGA DENGE 3 SE 4 FROM TEAM MEMBERS</div>
      <Link to='/team'>
      <button>MORE</button>
   
      </Link>
      <div className='gallery-carousel'>
      <HomeGallery/>
      <Link to='/gallery'>
      <button className='gallery-btn'>MORE</button>
      </Link>
      </div>
      <div>OR AGAR LAST MAI SPONSERS KE LIYE BOLENGE TO VO BHI KAR DENGE</div>
    </div>
  )
}


export default Homepage
