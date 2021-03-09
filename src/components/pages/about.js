import React, { useState } from 'react'

const AboutPage = props => {
  return (
      <div className="background-container">
    <div className='about-container'>
      <div className='item-cards-wrapper'>
        <div className='card-header'>
          <img src='https://source.unsplash.com/random/350x350' alt='' />
        </div>
        <div className='card-body'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reiciendis tenetur obcaecati tempore voluptatibus maxime at neque
            nobis a illo? Tempora rerum mollitia, deleniti culpa neque fugiat
            rem qui sunt.
          </p>
        </div>
        <div className='card-footer'>
          <h4>&copy; Mason Designs 2021</h4>
        </div>
      </div>
    </div>
      </div>
  )
}

export default AboutPage
