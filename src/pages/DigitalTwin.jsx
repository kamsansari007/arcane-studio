import { useEffect } from 'react'
import './DigitalTwin.css'
import DTHero from '../components/digital-twin/DTHero.jsx'
import DTSection from '../components/digital-twin/DTSection.jsx'
import IconCardGrid from '../components/digital-twin/IconCardGrid.jsx'
import OutcomesGrid from '../components/digital-twin/OutcomesGrid.jsx'
import ServiceCardsGrid from '../components/digital-twin/ServiceCardsGrid.jsx'
import MaturityTrack from '../components/digital-twin/MaturityTrack.jsx'
import PlatformBox from '../components/digital-twin/PlatformBox.jsx'
import {
  pillars,
  pimAim,
  challenges,
  maturitySteps,
  architectureFlow,
  digitalTwinServices,
  platformFeatures,
  outcomes,
  scaleLevels,
} from '../data/digitalTwinData.js'

function DigitalTwin() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="digital-twin">
      <DTHero
        label="Digital Twin Services"
        title="Your Building Data Should Still Be Working 20 Years After Handover"
        description="We connect BIM models, asset data, and operational systems into a live digital replica of your facilities. The result: smarter maintenance, real-time visibility, and decisions grounded in data instead of guesswork."
        cta="Discuss Your Digital Twin Strategy"
      />

      <DTSection label="The Concept" title="What is a Digital Twin?">
        <div className="dt-grid">
          <div className="dt-grid-text">
            <p>A Digital Twin is a dynamic digital replica of your physical assets. Not a static 3D model sitting on a server. A live, connected system that bridges design data with operational reality.</p>
            <p>It connects four layers of information into a single, queryable environment that facility teams, asset managers, and decision-makers can actually use.</p>
          </div>
          <div className="dt-pillars">
            {pillars.map((pillar) => (
              <div className="dt-pill" key={pillar}>{pillar}</div>
            ))}
          </div>
        </div>
      </DTSection>

      <DTSection
        alt
        label="Data Lifecycle"
        title="From Project Model to Asset Model"
        intro="The transition from construction to operations is where most project data dies. Digital Twin technology keeps it alive."
      >
        <OutcomesGrid groups={pimAim} />
      </DTSection>

      <DTSection
        label="The Problem"
        title="Why Facility Operations Struggle Without a Digital Twin"
        intro="Most buildings hand over a stack of PDFs and an as-built model nobody opens again. The data exists, but it’s scattered, outdated, and disconnected from the teams who need it."
      >
        <IconCardGrid items={challenges} variant="challenge" />
      </DTSection>

      <DTSection
        alt
        label="Maturity Framework"
        title="Digital Twin Maturity Model"
        intro="Not every facility needs an autonomous twin on day one. We help you establish the right foundation, then scale toward intelligence. Normalized data standards in the early stages build the groundwork for AI-driven insight in the later stages."
      >
        <MaturityTrack
          steps={maturitySteps}
          footnote="Establishing normalized data early → Foundation for portfolio-wide AI/ML insight later"
        />
      </DTSection>

      <DTSection
        label="Technical Architecture"
        title="How It All Connects"
        intro="A Digital Twin integrates physical building systems with a cloud-based platform through IoT sensors, BMS protocols, and middleware. Here’s the data flow."
      >
        <IconCardGrid items={architectureFlow} variant="arch" />
      </DTSection>

      <DTSection
        alt
        label="What We Deliver"
        title="Digital Twin Services"
        intro="From initial data capture through platform deployment and IoT integration. We handle the full implementation, not just the model."
      >
        <ServiceCardsGrid items={digitalTwinServices} />
      </DTSection>

      <DTSection>
        <PlatformBox
          label="Preferred Platform"
          title="Autodesk Tandem"
          description="We implement Digital Twins on Autodesk Tandem, a purpose-built platform for transitioning BIM data into facility operations. Native integration with the Autodesk ecosystem your project teams already use."
          features={platformFeatures}
        />
      </DTSection>

      <DTSection
        alt
        label="Results"
        title="What a Digital Twin Delivers"
        intro="The value compounds over time. Immediate operational visibility becomes predictive intelligence becomes autonomous optimization."
      >
        <OutcomesGrid groups={outcomes} />
      </DTSection>

      <DTSection
        label="Scale"
        title="From a Single Device to an Entire City"
        intro="Digital Twins operate at every scale. We scope and implement at the level that matches your operational needs and growth trajectory."
      >
        <ServiceCardsGrid items={scaleLevels} />
      </DTSection>

      <div className="cta-section">
        <div className="dt-inner">
          <h2>The Value of Your Asset Lies in How Intelligently It’s Managed</h2>
          <p>Talk to our team about building a Digital Twin strategy that transitions your project data into operational intelligence.</p>
          <a href="/#contact" className="cta-btn">Start the Conversation</a>
        </div>
      </div>
    </div>
  )
}

export default DigitalTwin
