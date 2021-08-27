import React from 'react'
import Card from './Card'
import './styles/CardList.css'

const CardList = (props) => {
  return (
    <div className='cardList'>
      {props.robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  )
}

export default CardList
