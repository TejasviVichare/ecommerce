import React from 'react'
import HeroSection from './HeroSection'
import FeatureProducts from './Components/FeatureProducts'

const Home = () => {
   const data={
      name:'Welcome to Our Website'
   }

  return (
   <>
   <HeroSection mydata={data} />
   <FeatureProducts/>
   
   </>
  )
}

export default Home