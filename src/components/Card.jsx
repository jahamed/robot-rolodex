import React from 'react'
import './styles/Card.css'

const Card = (props) => {
  const { robot } = props
  return (
    <div className='card'>
      <h3>{robot.name}</h3>
      <img alt='robot avatar' src={`https://robohash.org/${robot.id}`} />
    </div>
  )
}

export default Card
