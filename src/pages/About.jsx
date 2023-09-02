import React from 'react'
import './styles/about.css'
import Goals from '../components/Goals'
import Partners from '../components/Partners'
import Team from '../components/Team'
import SemiFooter from '../components/footer/SemiFooter'
import Footer from '../components/footer/Footer'
const About = () => {
  return (
    <div className='about'>
      <div className='top-section'>
        <h2>
          Our <span>Talanta Hela</span>
        </h2>
      </div>
      <div className='bottom-section'>
        <div className='left'>
          <a href='#'>About our Team</a>
          <h2>Talantahela – Where Creativity Meets Possibility!</h2>
        </div>
        <div className='right'>
          <p>
            Talanta Hela is a government initiative that aims to identify,
            nurture, and monetize the talents of Kenyan youth. The initiative
            was launched by President William Ruto in June 2023 and is run by
            the Ministry of Youth Affairs, Sports and Arts.
          </p>
        </div>
      </div>
      <div className='objectives'>
        <Goals />
      </div>
      <div className='team'>
        <h2>Meet everyone who made this possible</h2>
        <Team />
      </div>
      <div className='partt'>
        <Partners />
      </div>
      <SemiFooter />
      <Footer />
    </div>
  )
}

export default About
