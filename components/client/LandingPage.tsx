import React from 'react'
import MainHeader from './MainHeader'
import Banner1 from './Banner1'
import CoffeeBeans from './CoffeeBeans'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-start w-full'>
      <CoffeeBeans />
      <MainHeader />
      <Banner1 />
    </div>
  )
}

export default LandingPage