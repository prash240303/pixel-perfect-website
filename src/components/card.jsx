// This is an for how a component with porps can look like

import React from 'react'

const Card = ({ single, item }) => {
  return (
    <div key={item.id} className={`card ${single && 'single'}`}>
      <header id='name' className='name'>
        {item.title1}
      </header>
      <p>{item.title2}</p>
    </div>
  )
}

export default Card
