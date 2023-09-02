import './styles/stories.css'

const SuccessStoryCard = ({ imageSrc, name, profession, training, link }) => {
  return (
    <div className='success-story-card'>
      <img src={imageSrc} alt={name} className='profile-image' />
      <h3>{name}</h3>
      <p>{profession}</p>
      <p>{training}</p>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        View Profile
      </a>{' '}
    </div>
  )
}

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      imageSrc: './images/channels4_profile 1.png',
      name: 'Eve Mungai',
      profession: 'Creative',
      training: 'Nyayo Stadium',
      link: 'https://www.example.com/story1',
    },
    {
      id: 2,
      imageSrc: './images/pexels-chythecreator-15177813 1.png',
      name: 'Dunstun Emusgut',
      profession: 'Architect',
      training: 'Kasarani Learning Center',
      link: 'https://www.example.com/story2',
    },
    {
      id: 3,
      imageSrc: './images/qcpuohmx7mxwu8bxj2wl 1.png',
      name: 'Faith Kipyegon',
      profession: 'Athlete',
      training: 'Kipyegon keino Stadium',
      link: 'https://www.example.com/story2',
    },
    {
      id: 2,
      imageSrc: './images/pexels-thirdman-6109392 1.png',
      name: 'Brian Okinyi',
      profession: 'Architect',
      training: 'Kasarani Learning Center',
      link: 'https://www.example.com/story2',
    },
  ]
  return (
    <div className='success-stories-container'>
      {stories.map((story) => (
        <SuccessStoryCard
          key={story.id}
          imageSrc={story.imageSrc}
          name={story.name}
          profession={story.profession}
          training={story.training}
          link={story.link}
        />
      ))}
    </div>
  )
}

export default SuccessStories
