import React from 'react'
import './styles/team.css'
function Teambhnd({ name, description, image }) {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='card-contentt'>
        <h3>{name}</h3>
        <p>{description}</p>
        {/* <a className='tranbtn ' href={link}>
          Go to
        </a> */}
      </div>
    </div>
  )
}

const team = [
  {
    name: 'Ababu Namwamba',
    description: 'CS for Youth Affairs, Sports and the Arts.',

    image: '/images/ababuTeam.png',
  },
  {
    name: 'Faith Kipyegon',
    description: 'Director',

    image: '/images/channels4_profile 1.png',
  },

  {
    name: 'Dan Emusgut',
    description: 'Software Developer',

    image: '/images/dunTeam.png',
  },
]

function Team() {
  return (
    <div className='card-row'>
      {team.map((person, index) => (
        <Teambhnd key={index} {...person} />
      ))}
    </div>
  )
}

export default Team
