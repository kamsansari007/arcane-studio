import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ServiceHero from '../components/ServiceHero.jsx'
import ServiceContent from '../components/ServiceContent.jsx'
import ServiceFAQ from '../components/ServiceFAQ.jsx'
import ServiceCTA from '../components/ServiceCTA.jsx'
import { servicesData } from '../data/servicesData.js'

function ServiceDetail() {
  const { slug } = useParams()
  const service = servicesData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  if (service.template === 'minimal') {
    return (
      <ServiceFAQ
        definition={service.definition}
        faqTitle={service.faqTitle}
        faq={service.faq}
      />
    )
  }

  return (
    <>
      <ServiceHero title={service.label} image={service.heroImage} />
      <ServiceContent
        intro={service.intro}
        images={service.images}
        workflowTitle={service.workflowTitle}
        workflow={service.workflow}
        deliverablesTitle={service.deliverablesTitle}
        deliverables={service.deliverables}
        deliverableImage={service.deliverableImage}
      />
      <ServiceCTA image={service.ctaImage} />
    </>
  )
}

export default ServiceDetail
