import React from 'react'
import './semi.css'
import { BsQrCode } from 'react-icons/bs'
import google from '../../images/googleplay.png'
import appst from '../../images/appstore.png'
import phone from '../../images/iPhone 14 Mockup, Clay 1.png'
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
          <img src={google} alt='' />
          <img src={appst} alt='' />
        </div>
      </div>
      <div className='phone'>
        <img src={phone} alt='' />
      </div>
    </div>
  )
}

export default SemiFooter
