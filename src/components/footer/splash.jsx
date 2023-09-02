import './splash.css'
import React, { Component } from 'react'

export default class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div className='scroll-effect'>
          <div className='line3'></div>
          <div className='line2'></div>
          <div className='line1'></div>
        </div>
      </div>
    )
  }
}
