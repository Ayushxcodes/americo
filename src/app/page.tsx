import Navbar from '@/components/base/Navbar'
import HeroSection from '@/components/Landing/HeroSection'
import WhyChooseUs from '@/components/Landing/HowWeWork'
import HowWeWork from '@/components/Landing/OurProcess'
import WhatWeDeliver from '@/components/Landing/WhatWeDeliver'
import WhoAreWe from '@/components/Landing/WhoAreWe'
import WhyAmericoeMedico from '@/components/Landing/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div className='py-10'>
      <HeroSection />
      <WhoAreWe />
      <WhatWeDeliver />
      <WhyChooseUs />
      <WhyAmericoeMedico />
      <HowWeWork />
    </div>
  )
}

export default page