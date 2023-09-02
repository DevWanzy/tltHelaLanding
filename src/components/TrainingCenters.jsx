import React from 'react'
import './styles/trainingcard.css'
function AcademyCard({ name, description, link, image }) {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='card-content'>
        {/* <h3>{name}</h3> */}
        {/* <p>{description}</p> */}
        {/* <a className='tranbtn ' href={link}>
          Go to
        </a> */}
      </div>
    </div>
  )
}

const academies = [
  {
    name: 'Academy 1',
    description: 'Description of Academy 1',
    link: '#',
    image: './images/Frame 122.png',
  },
  {
    name: 'Academy 2',
    description: 'Description of Academy 2',
    link: '#',
    image: './images/Frame 122.png',
  },
  {
    name: 'Academy 3',
    description: 'Description of Academy 3',
    link: '#',
    image: './images/Frame 122.png',
  },
]

function TrainingCenters() {
  return (
    <div className='card-row'>
      {academies.map((academy, index) => (
        <AcademyCard key={index} {...academy} />
      ))}
    </div>
  )
}

export default TrainingCenters
