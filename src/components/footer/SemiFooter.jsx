import React from 'react'
import './semi.css'
import { BsQrCode } from 'react-icons/bs'
const SemiFooter = () => {
  return (
    <div className='semi'>
      <div className='one'>
        <h2>
          Upload your videos. Anywhere,
          <br /> anytime.
        </h2>
        <div className='scan'>
          <img src='' alt='' />
          <BsQrCode style={{ fontSize: '4rem' }} />
        </div>
        <div className='play'>
          <img src='/images/googleplay.png' alt='' />
          <img src='/images/appstore.png' alt='' />
        </div>
      </div>
      <div className='phone'>
        <img src='/images/iPhone 14 Mockup, Clay 1.png' alt='' />
      </div>
    </div>
  )
}

export default SemiFooter
