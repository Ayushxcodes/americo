import ServiceHero from '@/components/Service/ServiceHero'
import AIInnovationSection from '@/components/Service/ServiceOne'
import FullServicesSections from '@/components/Service/ServiceRest'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
        <ServiceHero />
        <AIInnovationSection />
        <FullServicesSections />
    </div>
  )
}

export default ServicePage