import './styles/stories.css'
import story1 from '../images/channels4_profile 1.png'
import story2 from '../images/pexels-chythecreator-15177813 1.png'
import story3 from '../images/qcpuohmx7mxwu8bxj2wl 1.png'
import story4 from '../images/pexels-thirdman-6109392 1.png'
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
      imageSrc: story1,
      name: 'Eve Mungai',
      profession: 'Creative',
      training: 'Nyayo Stadium',
      link: 'https://www.example.com/story1',
    },
    {
      id: 2,
      imageSrc: story2,
      name: 'Dunstun Emusgut',
      profession: 'Architect',
      training: 'Kasarani Learning Center',
      link: 'https://www.example.com/story2',
    },
    {
      id: 3,
      imageSrc: story3,
      name: 'Faith Kipyegon',
      profession: 'Athlete',
      training: 'Kipyegon keino Stadium',
      link: 'https://www.example.com/story2',
    },
    {
      id: 2,
      imageSrc: story4,
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
