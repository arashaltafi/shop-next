import React, { Suspense } from 'react'
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
import BottomBar from './BottomBar'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-12 sm:gap-16 md:gap-20 items-center justify-start w-full'>
      <Suspense fallback={<div>Loading...</div>}>
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
        <BottomBar />
      </Suspense>
    </div>
  )
}

export default LandingPage