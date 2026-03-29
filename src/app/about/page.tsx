import React from 'react'
import AboutHero from '@/components/About/AboutHero'
import OurStory from '@/components/About/OurStory'
import MissionVision from '@/components/About/MIssionVision'
import StandForSection from '@/components/About/WhatWeStandFor'
import PartnersSection from '@/components/About/WhyChooseItems'
import WhoAreWe from '@/components/Landing/WhoAreWe'
const Aboutpage = () => {
  return (
    <div>
      <WhoAreWe />
        <OurStory />
        <MissionVision />
        <StandForSection />
        <PartnersSection />
    </div>
  )
}

export default Aboutpage