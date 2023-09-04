import React from 'react'
import { useState, useEffect } from 'react'
import './styles/home.css'

import Goals from '../components/Goals'
import Steps from '../components/Steps'
import SuccessStories from '../components/SuccessStories'
import TrainingCenters from '../components/TrainingCenters'
import Partners from '../components/Partners'
import Top from '../components/Top'
import SemiFooter from '../components/footer/SemiFooter'
import Footer from '../components/footer/Footer'
import im from '../assets/main-bg.png'
import backgrnd1 from '../assets/Ababu.png'
import backgrnd2 from '../assets/faith.png'
const Home = () => {
  const [activeImage, setActiveImage] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevActiveImage) => (prevActiveImage === 1 ? 2 : 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const backgroundImage = activeImage === 1 ? backgrnd1 : backgrnd2
  return (
    <div className='home'>
      <div
        className='bg'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='b'></div>
        <img src={im} alt='' />
        <Top />
      </div>{' '}
      <div className='main'>
        <Goals />
      </div>
      <div className='ste'>
        <h1>
          Scale your <span>Talent </span>to the <br /> next Level
        </h1>
        <Steps />
      </div>
      <div className='stories'>
        <h1>Success Stories</h1>
        <SuccessStories />
      </div>
      <div className='training-card'>
        <h2>Our Training Centers</h2>
        <TrainingCenters />{' '}
      </div>
      <div className='icon-rows'>
        <h2>Our Partners</h2>
        <Partners />
      </div>
      <div className='below'>
        <SemiFooter />
        <Footer />
      </div>
    </div>
  )
}

export default Home
