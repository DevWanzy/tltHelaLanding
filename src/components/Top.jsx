import React from 'react'
import V_3 from './SVGs/V_3'
import V2 from './SVGs/V2'

import CustomSvg from './SVGs/CustomSvg'
import './styles/top.css'
import appst from '../images/appstore.png'
import google from '../images/googleplay.png'
import V_4 from './SVGs/V_4'
const Top = () => {
  return (
    <div>
      <div className='home-container'>
        <div className='vector'>
          <V_3 />
          <V_3 />
          <V2 />
          <V_4 />
          <CustomSvg />
        </div>
        <div className='content'>
          <div className='details'>
            <h4>Talanta Hela</h4>
            <h1>
              Home of <span>sports</span> and <span>Creatives</span>
            </h1>
            <p>
              Talanta Hela is a government initiative in Kenya that empowers and
              connects creatives. It provides resources, training, and
              opportunities to help them succeed.
            </p>
            <div className='icons'>
              <img src={appst} alt='ApStore' />
              <img src={google} alt='Google Play' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
