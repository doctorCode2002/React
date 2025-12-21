import React from 'react'
import "./Cards.css"
import Card from '../Card/Card'
const Cards = (props) => {
  return (
    <section>
      <h1>more of our products</h1>
      <h2>this is nothing</h2>
      <div className="cards-container">
        <Card number={props.number}/>
      </div>
    </section>
  )
}

export default Cards