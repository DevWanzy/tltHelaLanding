import React from 'react'
import './styles/selector.css'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

const checkors = [
  {
    title: 'Upload Video',
    content: 'Guardian Video Uploads',
    arrow: <BiSolidDownArrow />,
    bgColor: 'red', // Background color for title
  },
  {
    title: 'Filter All',
    content:
      'Video with potential talent are identified by coaches with the help of AI',
    arrow: <BiSolidUpArrow />,
    bgColor: 'green', // Background color for title
  },
  {
    title: 'Review & Sorting',
    content: 'Coaches Review the videos in Pools and Score it',
    arrow: <BiSolidDownArrow />,
    bgColor: 'orange', // Background color for title
  },
  {
    title: 'Selection Algorithm',
    content: 'Players are selected for trials based on their score on stage',
    arrow: <BiSolidUpArrow />,
    bgColor: 'black', // Background color for title
  },
  {
    title: 'Trials (KAS)',
    content: ' Selected players are invited to trials at KAS',
    arrow: <BiSolidDownArrow />,
    bgColor: 'green', // Background color for title
  },
]
const checkerData = [
  { color: 'red' },
  { color: 'green' },
  { color: 'orange' },
  { color: 'black' },
  { color: 'green' },
]
const Steps = () => {
  return (
    <div className='steps'>
      <div className='stps-card'>
        {checkors.map((check, index) => (
          <div
            className={`cardst ${index % 2 === 0 ? 'rotate-card' : ''}`}
            key={index}
          >
            {index % 2 === 1 ? (
              <div className='content-container'>
                <div className='arrow'>{check.arrow}</div>
                <div className={`content ${check.content}`}>
                  {check.content}
                </div>
                <h3
                  className={`title ${check.title}`}
                  style={{ backgroundColor: check.bgColor }}
                >
                  {check.title}
                </h3>
              </div>
            ) : (
              <div className='content-container'>
                <h3
                  className={`title ${check.title}`}
                  style={{ backgroundColor: check.bgColor }}
                >
                  {check.title}
                </h3>
                <div className={`content ${check.content}`}>
                  {check.content}
                </div>
                <div className='arrow'>{check.arrow}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='selector'>
        {checkerData.map((checker, index) => (
          <div className={`checker ${checker.color}`} key={index}>
            <span className={`number ${checker.color}-text`}>{index + 1}</span>
            <div className='tooltip'>
              {/* <span className='tooltip-text'>{checker.tooltip}</span> */}
              {/* <span className='arrow'></span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
