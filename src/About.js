import React from 'react'
import HeroSection from './HeroSection'
import { useProductContext } from './contex/productcontex';


const About = () => {
  const { myName } = useProductContext();


  const data = {
    name:'About Us'
  }

  return (
   <>
   {myName}
    <HeroSection  mydata={data}/>
   </>
  )
}

export default About