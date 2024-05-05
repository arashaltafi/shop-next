import React from 'react'
import MainHeader from './MainHeader'
import Banner1 from './Banner1'
import CoffeeBeans from './CoffeeBeans'
import Categories from './Categories'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-20 items-center justify-start w-full'>
      <CoffeeBeans />
      <MainHeader />
      <Banner1 />
      <Categories />
      <div>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
  )
}

export default LandingPage