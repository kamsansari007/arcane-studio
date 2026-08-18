import { useEffect } from 'react'
import AboutHero from '../sections/AboutHero.jsx'
import WorldClassProjects from '../sections/WorldClassProjects.jsx'
import ServicesAndProjects from '../sections/ServicesAndProjects.jsx'
import WhyChooseApproach from '../sections/WhyChooseApproach.jsx'
import TeamContactCard from '../sections/TeamContactCard.jsx'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutHero />
      <WorldClassProjects />
      <ServicesAndProjects />
      <WhyChooseApproach />
      <TeamContactCard />
    </>
  )
}

export default About
