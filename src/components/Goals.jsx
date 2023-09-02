import { HiOutlineLightBulb } from 'react-icons/hi'
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md'
import { LuHeartHandshake } from 'react-icons/lu'
const motives = [
  {
    icon: <HiOutlineLightBulb />,
    title: 'Mission',
    text: 'Hye Isabellah,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedit  quam aperiam, fuga i',
  },
  {
    icon: <MdOutlineFaceRetouchingNatural />,
    title: 'Vision',
    text: 'Hye Isabellah,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedit  quam',
  },

  {
    icon: <LuHeartHandshake />,
    title: 'Objective',
    text: 'Hye Isabellah,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedit',
  },
]
const Goals = () => {
  return (
    <div className='motives'>
      {motives.map((motive, index) => (
        <Motive key={index} {...motive} />
      ))}
    </div>
  )
}
const Motive = (props) => {
  const { icon, title, text } = props

  return (
    <article className='article'>
      <i>{icon}</i>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

export default Goals
