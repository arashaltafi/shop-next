import React from 'react'
import MainHeader from './MainHeader'
import Banner1 from './Banner1'
import CoffeeBeans from './CoffeeBeans'
import Categories from './Categories'
import Banner2 from './Banner2'
import BestSellers from './BestSellers'
import Lastest from './Lastest'
import Comments from './Comments'
import Services from './Services'
import Menu from './Menu'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-20 items-center justify-start w-full'>
      <CoffeeBeans />
      <MainHeader />
      <Banner1 />
      <Categories />
      <BestSellers />
      <Banner2 />
      <Lastest />
      <Comments />
      <Menu />
      <Services />
      <Footer />
    </div>
  )
}

export default LandingPage