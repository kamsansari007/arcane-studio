import './Process.css'

const steps = [
  {
    title: 'Step One: Schedule a discovery call',
    description:
      'Get in touch to schedule a friendly discovery call. We want to hear all about your project and what matters most to you.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 17l5-5-5-5M15 12H3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Step Two: Get a custom BIM plan',
    description:
      'In this phase, we will create for you your custom plan as per the requirements of your project and according to the local governing requirements.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="1.4" />
        <circle cx="17" cy="12" r="1.4" />
        <circle cx="12" cy="18" r="1.4" />
      </svg>
    ),
  },
  {
    title: 'Step Three: Implement your BIM requirement',
    description:
      'Our team takes care of everything, turning your plan into reality with hands-on support every step of the way.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.4 2.4L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Process() {
  return (
    <section className="section section--light process" id="experience">
      <div className="container">
        <h2 className="process__title">How We Work Together</h2>

        <div className="process__grid">
          {steps.map((step) => (
            <div className="process__step" key={step.title}>
              <div className="process__icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="process__cta">
          <a href="#contact" className="btn btn-dark">Speak With an Expert</a>
        </div>
      </div>
    </section>
  )
}

export default Process
