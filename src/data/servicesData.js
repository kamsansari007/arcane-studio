export const servicesNav = [
  { slug: '3d-bim-modeling', label: '3D BIM Modeling' },
  { slug: 'architectural-bim-modeling', label: 'Architectural BIM Modeling' },
  { slug: 'interior-bim-modeling', label: 'Interior BIM Modeling' },
  { slug: 'structural-bim-modeling', label: 'Structural BIM Modeling' },
  { slug: 'mepf-bim-modeling', label: 'MEPF BIM Modeling' },
  { slug: 'infrastructure-bim-modeling', label: 'Infrastructure BIM Modeling' },
  { slug: 'landscape-bim-modeling', label: 'Landscape BIM Modeling' },
  { slug: 'scan-to-bim', label: 'Scan-to-BIM' },
  { slug: 'bim-shop-drawings', label: 'BIM Shop Drawings' },
  { slug: 'bim-quantity-take-off', label: 'BIM Quantity Take-Off' },
  { slug: 'cad-to-bim-conversion', label: 'CAD to BIM Conversion' },
  { slug: 'facade-bim-modeling', label: 'Facade BIM Modeling' },
]

const A = '/assets/services'

export const servicesData = {
  '3d-bim-modeling': {
    label: '3D BIM Modeling',
    template: 'minimal',
    definition: {
      title: 'What is 3D BIM Modeling?',
      body: '3D BIM (Building Information Modeling) is the process of creating intelligent, data-rich digital representations of buildings and infrastructure. Unlike traditional CAD drawings, 3D BIM models contain geometry, spatial relationships, and embedded data for every building element — from walls and columns to HVAC ducts and electrical conduits. Arcane Studio delivers high-quality 3D BIM models from LOD 100 (conceptual) through LOD 500 (as-built), tailored to meet specific project requirements across Qatar, UAE, and Saudi Arabia.',
    },
    faqTitle: 'Frequently Asked Questions About 3D BIM Modeling',
    faq: [
      {
        q: 'What is the difference between BIM and 3D modeling?',
        a: 'Traditional 3D modeling creates visual geometry only. BIM modeling creates intelligent objects with embedded data — material properties, cost information, scheduling data, and manufacturer specifications. A BIM model is a database, not just a picture. Arcane Studio delivers data-rich models that support design, construction, and facility management.',
      },
      {
        q: 'What LOD levels do you deliver for 3D BIM models?',
        a: 'We deliver all Level of Development (LOD) specifications: LOD 100 (conceptual), LOD 200 (approximate geometry), LOD 300 (precise geometry), LOD 350 (construction-ready with connections), LOD 400 (fabrication-ready), and LOD 500 (as-built verified). Our F1 Lusail Circuit project was delivered at LOD 400.',
      },
      {
        q: 'How much does 3D BIM modeling cost in the GCC?',
        a: 'BIM modeling costs vary based on project size, complexity, LOD requirements, and disciplines involved. Typical rates range from $0.50 to $10+ per square foot depending on scope. Contact Arcane Studio for a customized quote based on your specific project requirements in Qatar, UAE, or Saudi Arabia.',
      },
      {
        q: 'What software do you use for 3D BIM modeling?',
        a: 'Our primary platform is Autodesk Revit for architectural, structural, and MEP modeling. We also use Navisworks for clash detection, Dynamo for computational design, AutoCAD for 2D documentation, and Autodesk Construction Cloud (ACC) for collaboration. All deliverables are ISO 19650-compliant.',
      },
      {
        q: 'Can Arcane Studio handle multi-discipline BIM projects?',
        a: 'Yes. We provide integrated architectural, structural, and MEPF (Mechanical, Electrical, Plumbing, Fire Protection) BIM modeling under one roof. This eliminates coordination gaps between disciplines. Our clash coordination service identifies and resolves conflicts before construction, reducing rework by up to 40%.',
      },
    ],
  },

  'architectural-bim-modeling': {
    label: 'Architectural BIM Modeling',
    template: 'rich',
    heroImage: `${A}/architectural-bim-modelling.jpg`,
    images: [`${A}/architectural-inn.jpg`, `${A}/architectural-skitch-1024x816.png`],
    intro: [
      'Architectural BIM Modeling services involve the creation of intelligent 3D models that represent the architectural elements of a building with precise geometric and non-geometric attributes.',
      'These services enhance collaboration, streamline workflows, and improve decision-making throughout the project lifecycle, from design to construction and facility management.',
    ],
    workflowTitle: 'Our Architectural BIM Modeling Workflow',
    workflow: [
      {
        title: 'Requirement Analysis & Project Setup',
        points: [
          'Collaborate with architects, designers, and clients to gather project requirements and establish modeling goals.',
          'Define the modeling scope, including floor plans, elevations, sections, and facade details.',
          'Develop custom project templates tailored to specific architectural styles, client preferences, and project needs.',
          'Establish LOD (Level of Development) specifications for different project phases (LOD 200, LOD 300, LOD 350, LOD 400) based on project deliverables.',
        ],
      },
      {
        title: 'Architectural Model Creation',
        points: [
          'Use Revit to create 3D architectural models, including walls, floors, ceilings, roofs, doors, windows, and stairs.',
          'Develop detailed building layouts, space planning, and design intent within the model to ensure design accuracy and constructability.',
          'Incorporate architectural materials, textures, and finishes to represent the project’s look and feel in the model.',
          'Model building elements with parametric components for flexibility and design optimization.',
        ],
      },
      {
        title: 'Coordination & Clash Detection',
        points: [
          'Perform interdisciplinary coordination between architectural, structural, and MEP systems.',
          'Use Navisworks, ACC, or Revit’s collaboration tools for clash detection, ensuring no conflicts between systems and early resolution of design issues.',
          'Provide clash reports to highlight discrepancies between disciplines, reducing errors and rework during construction.',
        ],
      },
      {
        title: '3D Visualization & Rendering',
        points: [
          'Generate realistic 3D renderings and visualizations for presentations, client reviews, and marketing purposes using Enscape, Lumion, or TwinMotion.',
          'Provide interactive walkthroughs and virtual reality (VR) models to enable clients to explore designs in immersive environments.',
          'Create high-quality renderings for interior and exterior views, ensuring designs align with client expectations.',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      { title: '3D Architectural Revit Models', description: 'Data-rich, parametric models of every architectural element.' },
      { title: 'Coordination & Clash Reports', description: 'Detailed reports flagging conflicts between disciplines.' },
      { title: 'Renderings & Walkthroughs', description: 'Photorealistic visuals and immersive VR walkthroughs.' },
      { title: 'Construction Documentation', description: 'Plans, elevations, sections, and schedules ready for construction.' },
    ],
    deliverableImage: `${A}/architectural-skitch-1024x816.png`,
    ctaImage: `${A}/Athul.jpg`,
  },

  'interior-bim-modeling': {
    label: 'Interior BIM Modeling',
    template: 'rich',
    heroImage: `${A}/interior-bim-modelling.jpg`,
    images: [`${A}/interior-inn2.jpg`, `${A}/interior.jpg`],
    intro: [
      'Our Interior BIM Modeling Services offer a detailed and data-driven approach to space planning, interior design, and construction documentation. Using Revit, we create precise 3D models that represent interior elements, including walls, doors, windows, and furniture.',
      'Our services enhance collaboration and coordination between design teams, contractors, and suppliers, ensuring a seamless workflow from design to construction. We help architects, interior designers, and contractors streamline and achieve their visions.',
    ],
    workflowTitle: 'Our Interior BIM Modeling Workflow',
    workflow: [
      {
        title: '3D Interior Modeling (LOD 200 to LOD 500)',
        points: [
          'Development of high-precision 3D models of interior spaces.',
          'Inclusion of walls, partitions, ceilings, flooring, furniture, fixtures, and decorative elements.',
          'Material properties and textures for accurate visualization.',
        ],
      },
      {
        title: 'Space Planning & Layout Optimization',
        points: [
          'Room layout planning based on functional and aesthetic requirements.',
          'Optimal placement of furniture, storage units, and other interior elements.',
          'Compliance with accessibility standards and ergonomic principles.',
        ],
      },
      {
        title: 'Lighting & Electrical Integration',
        points: [
          'Placement of lighting fixtures with accurate lumen output and distribution.',
          'Coordination with electrical layouts, switchboards, and power outlets.',
          'Simulation of natural and artificial lighting effects for ambiance optimization.',
        ],
      },
      {
        title: 'Material & Finish Mapping',
        points: [
          'Integration of real-world material properties (wood, marble, glass, metal, fabrics).',
          'Texture mapping for realistic rendering and design validation.',
          'Cost estimation based on material specifications.',
        ],
      },
      {
        title: 'Custom Revit Family Creation for Interiors',
        points: [
          'Parametric Revit families for furniture, lighting, appliances, and decorative elements.',
          'Manufacturer-specific models with accurate dimensions and specifications.',
          'Standardized libraries for consistency across projects.',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      { title: '3D Interior Revit Models', description: 'Accurate and detailed models of interior spaces and elements.' },
      { title: 'Construction Documentation', description: 'Floor plans, ceiling plans, elevations, and material schedules.' },
      { title: 'Clash Detection Reports', description: 'Identification and resolution of potential conflicts with other building systems.' },
      { title: 'Detailed Furniture & Fixture Layouts', description: 'Accurate representation of interior furnishings, equipment, and accessories.' },
    ],
    deliverableImage: `${A}/interior.jpg`,
    ctaImage: `${A}/Athul.jpg`,
  },

  'structural-bim-modeling': {
    label: 'Structural BIM Modeling',
    template: 'rich',
    heroImage: `${A}/structural-bim-modelling.jpg`,
    images: [`${A}/bim-5d2.jpg`, `${A}/structural-inn1.jpg`],
    intro: [
      'Our Structural BIM Modeling Services provide comprehensive and accurate 3D models for structural design, analysis, and construction. Using Revit for structural engineering, we deliver data-rich, parametric models that support design collaboration, coordination, clash detection, and construction documentation.',
      'Our expertise ensures high-quality structural models that align with project specifications, industry standards, and client requirements.',
    ],
    workflowTitle: 'Our Structural BIM Modeling Workflow',
    workflow: [
      {
        title: 'Requirement Analysis & Project Setup',
        points: [
          'Consult with structural engineers, architects, and contractors to understand project goals and structural needs.',
          'Define the structural modeling scope, including beam systems, columns, foundations, and reinforcement details.',
          'Develop project-specific templates for modeling, documentation, and standards adherence.',
          'Create LOD specifications (LOD 300, LOD 350, LOD 400) for clear project deliverables at various stages.',
        ],
      },
      {
        title: 'Structural Model Creation',
        points: [
          '3D Revit modeling of all structural elements, including steel and concrete framing, foundations, floors, and roofs.',
          'Generate structural components like beams, columns, slabs, walls, staircases, and foundations with parametric features.',
          'Utilize structural analysis tools within Revit (e.g., Autodesk Robot Structural Analysis) for initial analysis and simulations.',
          'Integrate structural loads and material properties.',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      { title: '3D Structural Revit Models', description: 'Accurate and parametric models for all structural components.' },
      { title: 'Clash Detection Reports', description: 'Detailed reports on clashes and coordination issues.' },
      { title: 'LOD – Compliant Models', description: 'Models created in compliance with LOD 300, 350, and 400 standards.' },
      { title: 'Construction & Fabrication Drawings', description: 'Detailed drawings ready for on-site construction and off-site fabrication.' },
      { title: 'Material Take-offs & Reinforcement Schedules', description: 'Accurate quantities and specifications for procurement and construction.' },
    ],
    deliverableImage: `${A}/image-4.jpg`,
    ctaImage: `${A}/WhatsApp-Image-2025-06-04-at-20.01.10-777x1024.jpeg`,
  },

  'mepf-bim-modeling': {
    label: 'MEPF BIM Modeling',
    template: 'rich',
    heroImage: `${A}/mep-bim-modelling.jpg`,
    images: [`${A}/mep-bim-modelling-inn.jpg`, `${A}/mep-bim-modelling-inn1.jpg`],
    intro: [
      'MEPF (Mechanical, Electrical, Plumbing & Fire Protection) BIM Modeling focuses on creating coordinated, clash-free, and intelligent 3D models of building systems. These models help optimize design, enhance collaboration, and improve construction efficiency.',
      'Our services support MEP engineers, contractors, and project managers in improving project efficiency, reducing errors, and optimizing systems for cost-effective construction and long-term operational performance.',
    ],
    workflowTitle: 'Our MEPF BIM Modeling Workflow',
    workflow: [
      {
        title: 'Requirement Analysis & Project Setup',
        points: [
          'Collaborate with MEP engineers, architects, and contractors to define project goals, modeling requirements, and deliverables.',
          'Develop project-specific templates for mechanical, electrical, plumbing, and fire protection systems.',
          'Define LOD specifications based on project needs (e.g., LOD 300 for design development, LOD 350 for construction).',
          'Align the MEPF modeling scope with building codes, client specifications, and project timelines.',
        ],
      },
      {
        title: 'MEPF Model Creation',
        points: [
          'Use Revit to create 3D models of all MEPF systems, including HVAC, lighting, plumbing, fire protection, and electrical distribution.',
          'Model ducting, piping, cabling, fire sprinklers, and lighting fixtures with accurate dimensions and material properties.',
          'Include mechanical equipment, electrical panels, fire alarm systems, and plumbing fixtures as part of the coordinated model.',
          'Incorporate fluid dynamics, airflow rates, and electrical load calculations for system performance.',
        ],
      },
      {
        title: 'Coordination & Clash Detection',
        points: [
          'Perform clash detection and coordination with architectural and structural models using Navisworks, BIM 360, or Revit’s collaboration features.',
          'Identify and resolve interdisciplinary conflicts, such as ducts crossing beams or electrical systems blocking access to mechanical rooms.',
          'Create clash detection reports and collaborate with the project team to resolve issues early, avoiding costly rework during construction.',
        ],
      },
      {
        title: 'Detailed Design & Documentation',
        points: [
          'Develop detailed MEPF drawings, including HVAC layouts, electrical riser diagrams, plumbing systems, and fire protection details.',
          'Provide schedules for equipment, fixtures, and material takeoffs to support procurement and construction.',
          'Integrate MEPF load calculations, performance specifications, and system capacity data into the BIM model for real-time updates.',
        ],
      },
      {
        title: '3D Visualization & Simulation',
        points: [
          'Generate realistic 3D renderings of MEP systems using Revit with Enscape, Lumion, TwinMotion, and V-Ray.',
          'Use virtual walkthroughs and simulations to ensure systems are adequately integrated and accessible.',
          'Conduct energy simulations and ventilation analysis to optimize system performance and efficiency.',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      { title: 'Coordinated MEPF Models', description: 'Clash-free, data-rich models across HVAC, electrical, plumbing, and fire protection.' },
      { title: 'Clash Detection Reports', description: 'Detailed coordination reports resolving conflicts before construction.' },
      { title: 'Construction-Ready MEP Drawings', description: 'Layouts, riser diagrams, and fabrication-ready details.' },
      { title: 'Equipment & Material Schedules', description: 'Accurate schedules to support procurement and installation.' },
    ],
    deliverableImage: `${A}/BIM-Photo-004-_-Lodie.jpeg`,
    ctaImage: `${A}/BIM-Photo-004-_-Lodie.jpeg`,
  },

  'infrastructure-bim-modeling': {
    label: 'Infrastructure BIM Modeling',
    template: 'rich',
    heroImage: `${A}/infrastructure-bim-modelling.jpg`,
    images: [`${A}/infrastructure-inn1.jpg`, `${A}/infrastructure.jpg`],
    intro: [
      'Infrastructure BIM (Building Information Modeling) is a digital approach to planning, designing, constructing, and managing infrastructure projects with high accuracy and efficiency.',
      'By implementing BIM for roads, highways, railways, bridges, tunnels, airports, and utilities, we provide stakeholders with an intelligent, data-rich model that enhances collaboration, reduces errors, and improves project delivery timelines.',
    ],
    workflowTitle: 'Our Infrastructure BIM Workflow',
    workflow: [
      {
        title: 'Data Collection & Site Analysis',
        points: [
          'Integrate topographic surveys, GIS data, point clouds (Scan-to-BIM), and LiDAR scans for a comprehensive understanding of site conditions.',
          'Implement georeferencing and coordinate system alignment to maintain spatial accuracy.',
          'Utilize drone-based photogrammetry and terrestrial LiDAR scanning for precise terrain modeling.',
          'Key benefit: reduces risks from outdated survey data and enhances coordination between surveyors, engineers, and designers.',
        ],
      },
      {
        title: 'Infrastructure 3D BIM Modeling',
        points: [
          'Roads & Highways — alignment modeling, cross-section detailing, and pavement layers.',
          'Bridges & Viaducts — superstructure and substructure modeling, reinforcement detailing.',
          'Railways & Metro — track alignments, station modeling, signaling & electrical systems.',
          'Tunnels, Airports, and Water & Wastewater Networks modeled using Civil 3D, InfraWorks, OpenRoads, OpenBridge, and Revit.',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      { title: '3D BIM Models', description: 'Civil 3D, Revit, InfraWorks, OpenRoads, and OpenBridge models.' },
      { title: '2D CAD Drawings', description: 'Plans, sections, elevations, and profiles.' },
      { title: '4D Simulation Models', description: 'Construction scheduling and phasing.' },
      { title: '5D BIM Reports', description: 'Quantity takeoff and cost analysis.' },
      { title: 'GIS-Integrated Models', description: 'Shapefiles and georeferenced BIM data.' },
      { title: 'Digital Twin', description: 'Ready for long-term asset management.' },
    ],
    deliverableImage: `${A}/infrastructure.jpg`,
    ctaImage: `${A}/WhatsApp-Image-2025-06-04-at-20.01.10-777x1024.jpeg`,
  },

  'landscape-bim-modeling': {
    label: 'Landscape BIM Modeling',
    template: 'rich',
    heroImage: `${A}/landscape-bim-modelling.jpg`,
    images: [`${A}/landscape-inn.jpg`, `${A}/landscape-inn1.jpg`],
    intro: [
      'Our Landscape BIM Modeling Services provide accurate and intelligent 3D BIM models for landscape design, ensuring smooth integration with architecture, MEP, and civil infrastructure. Using Autodesk Revit and additional plugins, we develop data-rich, clash-free models that enhance design coordination and streamline construction workflows.',
      'We work with landscape architects, contractors, and developers to create parametric BIM models for hardscape, softscape, grading, and site elements, ensuring efficiency from design to construction.',
    ],
    workflowTitle: 'Our Landscape BIM Workflow',
    workflow: [
      {
        title: 'Site Data Collection & Model Setup',
        points: [
          'Import topographic surveys, point clouds, GIS data, and CAD drawings into Revit.',
          'Set up coordinate systems for accurate geolocation and alignment with architectural and civil models.',
          'Establish model levels, grids, and reference planes for precise model structuring.',
          'Define Revit worksets and collaboration settings for multi-disciplinary coordination.',
        ],
      },
      {
        title: 'Terrain & Grading Modeling',
        points: [
          'Use Revit Toposurface tools to model site contours, grading, and elevation changes.',
          'Define retaining walls, slopes, and excavation zones based on site conditions.',
          'Optimize cut and fill calculations for earthwork estimation.',
          'Coordinate with civil engineering teams to align grading with roads, drainage, and underground utilities.',
        ],
      },
      {
        title: 'Hardscape & Softscape Modeling',
        points: [
          'Model pavements, pathways, curbs, plazas, decks, and staircases using Revit floors, slabs, and custom families.',
          'Place parametric plant families (trees, shrubs, grass) with realistic spacing and growth properties.',
          'Define green walls, green roofs, and bio-retention areas.',
          'Coordinate planting layouts with hardscape, irrigation, and lighting systems.',
        ],
      },
      {
        title: 'Clash Detection & Coordination',
        points: [
          'Perform clash detection using Navisworks to resolve conflicts between landscape elements, architecture, and MEP.',
          'Address issues related to grading conflicts, underground utilities, and spatial clearances.',
          'Ensure proper alignment of landscape elements with site infrastructure.',
        ],
      },
    ],
    deliverablesTitle: 'Construction Documentation & Deliverables',
    deliverables: [
      { title: 'Site Layout Plans', description: 'Overall landscape design with annotations.' },
      { title: 'Grading & Drainage Plans', description: 'Slopes, retaining walls, and water flow direction.' },
      { title: 'Hardscape & Softscape Plans', description: 'Materials, planting zones, and surface finishes.' },
      { title: 'Construction Details', description: 'Sections, elevations, and exploded views of site components.' },
      { title: 'Schedules & Quantity Take-offs', description: 'BOQ extraction for site elements.' },
    ],
    deliverableImage: `${A}/landscape-inn1.jpg`,
    ctaImage: `${A}/WhatsApp-Image-2025-06-04-at-20.01.10-777x1024.jpeg`,
  },

  'scan-to-bim': {
    label: 'Scan-to-BIM',
    template: 'minimal',
    definition: {
      title: 'What is Scan-to-BIM?',
      body: 'Scan-to-BIM is the process of using 3D laser scanning technology to capture precise measurements of existing buildings and infrastructure, then converting that point cloud data into intelligent BIM models. This enables accurate as-built documentation for renovation, retrofit, facility management, and heritage preservation projects. Arcane Studio provides end-to-end Scan-to-BIM services across Qatar, UAE, and Saudi Arabia, using Autodesk ReCap for point cloud processing and Revit for model creation.',
    },
    faqTitle: 'Frequently Asked Questions About Scan-to-BIM',
    faq: [
      {
        q: 'How much does Scan-to-BIM cost?',
        a: 'Scan-to-BIM costs depend on building size, complexity, and required LOD. Modeling fees typically range from $0.50 to $10+ per square foot, with total project costs from $2,500 to $200,000+. Scanning fees are additional and depend on the site. Contact Arcane Studio for a customized quote for your project in Qatar, UAE, or KSA.',
      },
      {
        q: 'How accurate is the Scan-to-BIM process?',
        a: 'Modern 3D laser scanning achieves accuracy within 1-3mm. The resulting BIM model accuracy depends on the target LOD — typically LOD 200-300 for as-built documentation, or LOD 400 for renovation projects. Arcane Studio uses Autodesk ReCap for point cloud processing to ensure maximum precision.',
      },
      {
        q: 'When do you need Scan-to-BIM services?',
        a: 'Scan-to-BIM is essential for: renovation and retrofit projects where original drawings are outdated or missing, heritage preservation (Heritage BIM/HBIM), facility management digital twin creation, clash detection before new system installations, and verifying as-built conditions against design intent.',
      },
      {
        q: 'What is the Scan-to-BIM workflow?',
        a: 'The process follows four stages: (1) 3D laser scanning of the existing building, (2) point cloud registration and cleanup using Autodesk ReCap, (3) BIM model creation in Revit using the point cloud as reference, and (4) quality assurance and delivery of the as-built BIM model at the required LOD.',
      },
    ],
  },

  'bim-shop-drawings': {
    label: 'BIM Shop Drawings',
    template: 'rich',
    heroImage: `${A}/bim-shop-drawing.jpg`,
    images: [`${A}/bim-shop-drawing.jpg`, `${A}/quantity.jpg`],
    intro: [
      'Our BIM Shop Drawings services convert coordinated BIM models into fabrication-ready 2D shop drawings for structural, architectural, and MEPF trades. Every drawing is generated directly from the model, so dimensions, connections, and quantities stay consistent from design through fabrication.',
      'We support fabricators, contractors, and site teams with clash-free, construction-ready documentation that reduces rework and speeds up procurement.',
    ],
    workflowTitle: 'Our BIM Shop Drawings Workflow',
    workflow: [
      {
        title: 'Model Review & Drawing Setup',
        points: [
          'Review the coordinated BIM model for completeness and clash-free status before drawing extraction.',
          'Set up sheet templates, view templates, and annotation standards aligned with fabricator requirements.',
          'Define scope per trade — structural steel, precast, MEPF, and architectural millwork.',
        ],
      },
      {
        title: 'Fabrication Drawing Development',
        points: [
          'Extract detailed plans, elevations, sections, and connection details directly from the model.',
          'Annotate dimensions, materials, and fabrication notes required for shop production.',
          'Generate piece-mark numbering and assembly sequencing for erection drawings.',
        ],
      },
      {
        title: 'Review & Coordination',
        points: [
          'Cross-check shop drawings against the latest coordinated model to catch late-stage changes.',
          'Circulate for contractor and fabricator review, incorporating markups back into the model.',
          'Issue final, stamped-ready drawing sets for fabrication and construction.',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      { title: 'Fabrication Shop Drawings', description: 'Trade-specific drawings ready for the shop floor.' },
      { title: 'Erection & Assembly Drawings', description: 'Piece-mark numbering and sequencing for site erection.' },
      { title: 'Schedules & Quantity Take-offs', description: 'Accurate material lists tied directly to the model.' },
      { title: 'Coordination Markups', description: 'Redlines and resolved comments folded back into the model.' },
    ],
    deliverableImage: `${A}/quantity.jpg`,
    ctaImage: `${A}/WhatsApp-Image-2025-06-04-at-20.01.10-777x1024.jpeg`,
  },

  'bim-quantity-take-off': {
    label: 'BIM Quantity Take-Off',
    template: 'rich',
    heroImage: `${A}/bim-quantity-take-off-inn1.jpg`,
    images: [`${A}/quantity.jpg`, `${A}/image.jpg`],
    intro: [
      'We offer automated quantity takeoff services by extracting data directly from BIM models, ensuring precision and reliability in material and cost estimation. By leveraging tools such as Revit, Navisworks Quantification, ACC Takeoff, and CostX, we deliver detailed quantity reports tailored to specific project needs.',
      'Our BIM Quantity Takeoff service eliminates manual errors and improves efficiency in cost estimation and resource planning.',
    ],
    workflowTitle: 'How Our Quantity Take-Off Works',
    workflow: [
      {
        title: 'Automated Quantity Extraction',
        points: ['Using BIM models created in software like Autodesk Revit, we automatically extract quantities of materials, components, and systems from the model, eliminating manual measurements.'],
      },
      {
        title: 'Real-Time Data for Cost Estimation',
        points: ['Quantities update in real time as the design evolves, enabling continuous cost estimation and budgeting throughout the project lifecycle.'],
      },
      {
        title: 'Enhanced Accuracy and Efficiency',
        points: ['The BIM model serves as a single source of truth, ensuring quantities stay consistent and minimizing discrepancies between design and the final built structure.'],
      },
      {
        title: 'Detailed Material & Component Breakdown',
        points: ['Comprehensive breakdowns of materials and components, including specifications, dimensions, and quantities for walls, floors, doors, windows, and MEP systems.'],
      },
    ],
    deliverablesTitle: 'Benefits of BIM Quantity Take-Off',
    deliverables: [
      { title: 'Reduces manual errors', description: 'and enhances accuracy in estimation.' },
      { title: 'Saves time', description: 'by automating quantity extraction from BIM models.' },
      { title: 'Improves procurement planning', description: 'with detailed and reliable reports.' },
      { title: 'Supports tendering and bidding', description: 'processes with accurate data.' },
      { title: 'Ensures transparency', description: 'in material planning and usage.' },
      { title: 'Facilitates resource optimization', description: 'and cost control.' },
    ],
    deliverableImage: `${A}/image.jpg`,
    ctaImage: `${A}/WhatsApp-Image-2025-06-04-at-20.01.10-777x1024.jpeg`,
  },

  'cad-to-bim-conversion': {
    label: 'CAD to BIM Conversion',
    template: 'rich',
    heroImage: `${A}/cad.jpg`,
    images: [`${A}/cad-to-bim1.jpg`, `${A}/ChatGPT-Image-Jun-30-2025-11_49_23-AM-1024x683.jpg`],
    intro: [
      'Our CAD to BIM Conversion services transform traditional 2D CAD drawings into intelligent, data-rich 3D BIM models. We convert architectural, structural, and MEP designs into BIM-ready formats with precise geometry and parametric details.',
      'We assist clients in modernizing their workflows by transitioning legacy CAD designs into BIM models that enhance project visualization, coordination, and analysis — ready for clash detection, quantity take-offs, and 4D/5D simulations.',
    ],
    workflowTitle: 'Our CAD-to-BIM Conversion Workflow',
    workflow: [
      {
        title: 'Data Collection & Project Setup',
        points: [
          'Gather 2D CAD files (DWG, DXF), PDFs, sketches, and project specifications.',
          'Validate drawings for accuracy, missing data, and discrepancies before BIM conversion.',
          'Establish Revit project standards, including units, coordinate systems, levels, and worksets.',
        ],
      },
      {
        title: 'Model Development in Revit',
        points: [
          'Convert architectural floor plans, sections, and elevations into BIM elements.',
          'Develop parametric families for walls, doors, windows, stairs, structural elements, and MEP components.',
          'Apply materials, finishes, and classification codes for enhanced project documentation.',
        ],
      },
      {
        title: 'Model Coordination & Clash Detection',
        points: [
          'Integrate converted models with architectural, structural, and MEP disciplines.',
          'Perform clash detection in Navisworks to identify and resolve inconsistencies.',
          'Adjust model elements to ensure constructability and compliance with design intent.',
        ],
      },
      {
        title: 'Model Validation & Quality Assurance',
        points: [
          'Conduct BIM audits and QA/QC checks to verify model accuracy.',
          'Ensure compliance with project standards (ISO 19650, AIA, LOD requirements).',
          'Provide a final BIM model ready for integration into construction and facility management workflows.',
        ],
      },
    ],
    deliverablesTitle: 'Benefits of CAD-to-BIM',
    deliverables: [
      { title: 'Enhanced Collaboration', description: '3D BIM models improve coordination between multidisciplinary teams, reducing misunderstandings and errors.' },
      { title: 'Accurate Data Integration', description: 'Intelligent models contain essential data for quantity take-offs, simulations, and facility management.' },
      { title: 'Time and Cost Efficiency', description: 'Reduces time spent on manual updates and enhances design accuracy, minimizing rework.' },
      { title: 'Compliance with Standards', description: 'Models align with BIM standards, ensuring compatibility with industry tools and workflows.' },
    ],
    deliverableImage: `${A}/ChatGPT-Image-Jun-30-2025-11_49_23-AM-1024x683.jpg`,
    ctaImage: `${A}/Athul.jpg`,
  },

  'facade-bim-modeling': {
    label: 'Facade BIM Modeling',
    template: 'rich',
    heroImage: `${A}/facade-bim-modelling.jpg`,
    images: [`${A}/facade-inn1.jpg`, `${A}/facade-inn.jpg`],
    intro: [
      'Our Facade BIM Services provide detailed and parametric 3D BIM models for building facades, ensuring accurate design coordination, fabrication readiness, and construction efficiency. Using Autodesk Revit, we develop data-driven facade models that integrate seamlessly with architecture, structure, and MEP systems.',
      'We work with architects, facade consultants, contractors, and fabricators to deliver clash-free, constructible facade models that support design validation, quantity estimation, and shop drawing production.',
    ],
    workflowTitle: 'Our Facade BIM Workflow',
    workflow: [
      {
        title: 'Project Setup & Data Integration',
        points: [
          'Import architectural drawings, point clouds (for existing buildings), and facade design sketches into Revit.',
          'Establish shared coordinates and worksets for collaborative modeling.',
          'Define levels, grids, and alignment with structural and MEP models.',
        ],
      },
      {
        title: 'Parametric 3D Facade Modeling',
        points: [
          'Create intelligent facade elements using Revit curtain walls, panels, mullions, and adaptive components.',
          'Develop custom families for curtain wall systems, cladding materials, louvers, sunshades, and facade-integrated windows and doors.',
          'Apply material specifications and performance data (thermal properties, reflectivity, etc.).',
        ],
      },
      {
        title: 'Structural & MEP Coordination',
        points: [
          'Ensure proper integration between facade elements and structural framing (anchoring, brackets, embeds).',
          'Coordinate with MEP teams for HVAC penetrations, facade lighting, and drainage details.',
          'Conduct clash detection using Navisworks to resolve conflicts before fabrication.',
        ],
      },
    ],
    deliverablesTitle: 'Construction-Ready Deliverables',
    deliverables: [
      { title: 'Facade Elevations', description: 'Detailed representation of facade materials and components.' },
      { title: 'Panel Layout Drawings', description: 'Numbering, sequencing, and connection details.' },
      { title: 'Mullion & Bracket Details', description: 'Profiles, section cuts, and fixing arrangements.' },
      { title: 'Glazing & Cladding Details', description: 'Material dimensions and installation guides.' },
      { title: 'Schedules & Quantity Take-offs', description: 'BOQ for panels, fasteners, and sealants.' },
    ],
    deliverableImage: `${A}/Whisk_e573e1adee.jpg`,
    ctaImage: `${A}/Whisk_e573e1adee.jpg`,
  },
}
