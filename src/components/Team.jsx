import React from 'react'
import './styles/team.css'
import ababuTeam from '../images/ababuTeam.png'
import faithteam from '../images/channels4_profile 1.png'
import danTeam from '../images/dunTeam.png'

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

    image: ababuTeam,
  },
  {
    name: 'Faith Kipyegon',
    description: 'Director',

    image: faithteam,
  },

  {
    name: 'Dan Emusgut',
    description: 'Software Developer',

    image: danTeam,
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
