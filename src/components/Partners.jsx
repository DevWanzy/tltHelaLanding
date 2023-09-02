import React from 'react'
import './styles/partners.css'

const iconsData = [
  {
    id: 1,
    name: 'Kenya Library',
    imageSrc: '/images/knls.png',
    link: 'link2',
  },
  {
    id: 2,
    name: 'Safaricom',
    imageSrc: '/images/saf.png',
    link: 'link3',
  },
  {
    id: 3,
    name: 'Ajira',
    imageSrc: '/images/ajira.png',
    link: 'link4',
  },
  {
    id: 4,
    name: 'NYS',
    imageSrc: '/images/nys.jfif',
    link: 'link4',
  },
]

const Partners = () => {
  return (
    <div className='icon-container'>
      {iconsData.map((icon) => (
        <div className='icon' key={icon.id}>
          <img src={icon.imageSrc} alt={icon.name} />
          <span className='icon-name'>{icon.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Partners
