export const pillars = ['BIM Models', 'Asset Data', 'Documentation', 'Operational Information']

export const pimAim = [
  {
    title: 'Project Information Model (PIM)',
    items: [
      {
        marker: '1',
        text: 'The digital model used during design and construction phases, incorporating physical and functional characteristics of the building or infrastructure.',
      },
      {
        marker: '2',
        text: 'Contains geometry, spatial relationships, quantities, and properties needed to coordinate and deliver the project.',
      },
    ],
  },
  {
    title: 'Asset Information Model (AIM)',
    items: [
      {
        marker: '1',
        text: 'The Digital Twin representation that extends beyond construction to cover the asset’s entire lifecycle: operations, maintenance, and eventual decommissioning.',
      },
      {
        marker: '2',
        text: 'Links equipment records, warranties, maintenance schedules, and real-time sensor data to the spatial model.',
      },
    ],
  },
]

export const challenges = [
  {
    icon: '⚙',
    title: 'Fragmented Asset Data',
    description: 'Critical information stored across multiple disconnected systems. No single source of truth for equipment specs, warranties, or maintenance history.',
  },
  {
    icon: '⇄',
    title: 'Data Loss Between Phases',
    description: 'Valuable information collected during design and construction disappears at handover. Each phase starts from scratch.',
  },
  {
    icon: '🔍',
    title: 'Inaccessible Asset Information',
    description: 'Facility teams can’t quickly find accurate data about equipment location, specifications, or service records when they need it.',
  },
  {
    icon: '🔧',
    title: 'Reactive Maintenance',
    description: 'Without connected data, maintenance is reactive instead of predictive. Equipment fails before problems are identified, driving up costs and downtime.',
  },
]

export const maturitySteps = [
  {
    title: 'Descriptive',
    description: 'Normalized data foundation for assets, spaces, and systems. Leveraging as-built BIM to create a digital replica curated for operations.',
  },
  {
    title: 'Informative',
    description: 'Augmented with operational and sensor data. Real-time and historical insights normalized across the portfolio.',
  },
  {
    title: 'Predictive',
    description: 'Analytics-driven early fault detection and predictive insights for optimizing building operations before failures occur.',
  },
  {
    title: 'Comprehensive',
    description: 'Simulation-based what-if scenarios. Model the impact of system upgrades or space reconfigurations before committing resources.',
  },
  {
    title: 'Autonomous',
    description: 'AI models that act on behalf of occupants and self-tune facility performance. The building learns and adapts.',
  },
]

export const architectureFlow = [
  {
    icon: '🏗',
    title: 'Physical Systems',
    description: 'HVAC, lighting, security, energy management, fire safety, and environmental sensors generating continuous data.',
  },
  {
    icon: '📡',
    title: 'Communication Layer',
    description: 'BACnet, Modbus, MQTT, CoAP, and HTTP protocols transfer data from BMS and IoT devices to the processing layer.',
  },
  {
    icon: '⚙',
    title: 'Middleware & Processing',
    description: 'Data filtering, normalization, and mapping through integration tools. Handles the volume and variety of large-scale infrastructure data.',
  },
  {
    icon: '💻',
    title: 'Digital Twin Platform',
    description: 'Cloud-based environment for visualization, analytics, real-time monitoring, dashboards, and predictive insight through the BIM viewer interface.',
  },
]

export const digitalTwinServices = [
  {
    title: 'Scan-to-BIM for Existing Facilities',
    description: 'Reality capture and point cloud processing to create accurate as-built BIM models of existing buildings and infrastructure. The essential first step for retrofit and FM applications.',
  },
  {
    title: 'COBie Data Integration',
    description: 'Structured asset data mapped to BIM elements following COBie standards. Equipment records, specifications, warranties, and maintenance data embedded directly in the model.',
  },
  {
    title: 'QR Code Integration',
    description: 'Physical-to-digital linking through QR codes mapped to model elements. Facility teams scan an asset on-site and access its full data profile instantly.',
  },
  {
    title: 'Platform Deployment',
    description: 'Configuration and deployment of your Digital Twin platform, including model import, saved views, custom parameters, asset inventory, and operational dashboards.',
  },
  {
    title: 'BMS & IoT Integration',
    description: 'Connecting building management systems and IoT sensors to the Digital Twin through real-time data streams. Live operational data overlaid on the spatial model.',
  },
  {
    title: 'Lifecycle Data Strategy',
    description: 'Planning and structuring the data handover from design through construction into operations. No information lost between project phases.',
  },
]

export const platformFeatures = [
  {
    icon: '→',
    title: 'Built for BIM-to-Operations',
    description: 'Seamless transition from design and construction data directly into facility management workflows.',
  },
  {
    icon: '☁',
    title: 'Cloud-Based & Scalable',
    description: 'Secure cloud platform that scales across individual buildings, campuses, or entire asset portfolios.',
  },
  {
    icon: '🔗',
    title: 'Connected Ecosystem',
    description: 'Integrates with BIM models, Autodesk Construction Cloud, IoT platforms, and FM systems.',
  },
  {
    icon: '☺',
    title: 'Intuitive 3D Interface',
    description: 'Facility teams access asset data through a visual 3D environment. No BIM expertise required.',
  },
]

export const outcomes = [
  {
    title: 'Immediate Impact',
    items: [
      { marker: '✓', text: 'Centralized asset data: one consolidated view of all BIM models, equipment records, and maintenance history' },
      { marker: '✓', text: 'Real-time access to asset information, warranties, and specifications for faster maintenance planning' },
      { marker: '✓', text: 'Reduced operational downtime through faster issue identification and resolution' },
      { marker: '✓', text: 'Seamless data continuity from design through construction into operations with zero information loss' },
    ],
  },
  {
    title: 'Long-Term Value',
    items: [
      { marker: '✓', text: 'Data-driven insights for asset performance, enabling predictive maintenance strategies' },
      { marker: '✓', text: 'Energy, utility, and environmental performance monitoring to support sustainability and ESG goals' },
      { marker: '✓', text: 'Future-ready platform: integrate IoT sensors, BMS, and CAFM systems as your operations mature' },
      { marker: '✓', text: 'Scalable to portfolio-level Digital Twins across all owned or managed assets' },
    ],
  },
]

export const scaleLevels = [
  {
    title: 'Smart Device',
    description: 'Individual equipment monitoring. Sensors on critical HVAC units, electrical panels, or specialized equipment feeding data to the twin.',
  },
  {
    title: 'Smart Building',
    description: 'Full-facility Digital Twin connecting all systems, spaces, and assets in a single building to one operational platform.',
  },
  {
    title: 'Smart City / District',
    description: 'Portfolio-level twins spanning multiple buildings, infrastructure, and public assets. Unified data layer for district or campus-wide operations.',
  },
]
