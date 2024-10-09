import React from 'react'

const HeroSection = ({mydata}) => {

    const {name} = mydata

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:mt-14 mb-7 md:px-28 py-6'>
      <div className='  px-3 md:px-12' >
          <p className='text-3xl mb-7' >{name}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas  Voluptatum ducimus voluptates voluptas</p>
          <button className='bg-blue-900 p-2 text-white mt-6 mb-5'>View More</button>
      </div>
      <div className='px-5 pb-3'>
          <img src='images/hero.jpg' alt='image-about-us' />
      </div>
    </div>
  )
}

export default HeroSection