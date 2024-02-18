import React from 'react'
import Header from '../components/Header';

//components
import Stats from '../components/Stats';
import Features from '../components/Features';
import WhyUs from '../components/WhyUs';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery'
import PCTA from '../components/PCTA'

const Home = () => {
  return (
    <div className='mt-24 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl space-y-40'>
      <Header />
      <Stats />
      <Features />
      <WhyUs />
      <Gallery/>
      <Banner />
      <PCTA />
    </div>
  )
}

export default Home