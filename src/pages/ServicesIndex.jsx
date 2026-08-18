import { useEffect } from 'react'
import ServicesOverviewHero from '../sections/ServicesOverviewHero.jsx'
import ServicesIntro from '../sections/ServicesIntro.jsx'
import OptimizingProjects from '../sections/OptimizingProjects.jsx'
import ServicesDirectory from '../sections/ServicesDirectory.jsx'

function ServicesIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ServicesOverviewHero />
      <ServicesIntro />
      <OptimizingProjects />
      <ServicesDirectory />
    </>
  )
}

export default ServicesIndex
