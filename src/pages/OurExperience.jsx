import { useEffect } from 'react'
import ExperienceHero from '../sections/ExperienceHero.jsx'
import HighlightedIntro from '../sections/HighlightedIntro.jsx'
import ExperienceGallery from '../sections/ExperienceGallery.jsx'
import SecondmentStaffing from '../sections/SecondmentStaffing.jsx'
import ExperienceContactCta from '../sections/ExperienceContactCta.jsx'

function OurExperience() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ExperienceHero />
      <HighlightedIntro />
      <ExperienceGallery />
      <SecondmentStaffing />
      <ExperienceContactCta />
    </>
  )
}

export default OurExperience
