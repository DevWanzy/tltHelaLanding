import React from 'react'
import './styles/part.css'

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import SemiFooter from '../components/footer/SemiFooter'
import Footer from '../components/footer/Footer'
const Partners = () => {
  return (
    <div
      className='part
    '
    >
      <div className='top-section'>
        <h2>
          {' '}
          Our <span>Partners</span>
        </h2>
      </div>
      <div className='bottom-section'>
        <div className='left'>
          <div className='logo'>
            <img src='/images/ajira.png' alt='' />
          </div>
          <div className='iconss'>
            <i>
              <FaYoutube />
            </i>

            <i>
              <FaFacebook />
            </i>

            <i>
              {' '}
              <FaTwitter style={{}} />
            </i>

            <i>
              {' '}
              <FaInstagram style={{ color: '' }} />
            </i>
          </div>
        </div>
        <div className='righ'>
          <h2 className='head'>About Ajira</h2>
          <p>
            The program seeks to position Kenya as a choice labour destination
            for multinational companies as well as encourage local companies and
            public sector to create digital work. The government digitization
            projects already create lots of viable micro work that can be
            completed by digital workers. Access to digital work will build
            wealth and grow the middle class across the country. A larger middle
            class means more opportunities for businesses and direct growth of
            GDP. The main objectives are to raise the profile of digital work;
            Promote a mentorship and collaborative learning approach to finding
            digital work; Provide Kenyans with access to digital work, and
            finally Promote Kenya as a destination for online workers.
          </p>

          <p className='s'>
            <div className='innerline'></div>
            The program seeks to position Kenya as a choice labour destination
            for multinational companies as well as encourage local companies and
            public sector to create digital work. The government digitization
            projects already create lots of viable micro work that can be
            completed by digital workers.
          </p>
        </div>
      </div>
      <SemiFooter />
      <Footer />
    </div>
  )
}

export default Partners
