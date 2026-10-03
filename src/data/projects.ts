import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'echolearn',
    number: '01',
    title: 'EchoLearn',
    category: 'Voice-Based AI Adaptive Tutor',
    tagline: 'Voice-first personalized AI tutor utilizing semantic speech retrieval, Gemma, and real-time knowledge gap detection.',
    filterCategory: 'ai-ml',
    isFeatured: true,
    technologies: ['Voice AI', 'Gemma', 'RAG', 'ChromaDB', 'Embeddings', 'Speech Processing', 'Semantic Retrieval', 'Adaptive Learning'],
    overview: 'EchoLearn is a voice-based AI tutor engineered to replace passive studying with natural spoken dialogue. Moving beyond text chatbots, EchoLearn engages students through real-time voice: powered by Gemma and retrieval-augmented generation (RAG) with ChromaDB embeddings, the tutor listens to the student explain concepts aloud, poses spoken Socratic cross-questions to verify true depth of comprehension, and dynamically pinpoints knowledge gaps to recalibrate instruction.',
    problem: 'Text chatbots and static flashcards lack the pedagogical immersion of spoken dialogue, where verbalizing reasoning reveals authentic conceptual misunderstandings.',
    approach: 'Built a voice-first tutoring loop combining low-latency speech capture, semantic vector retrieval over curriculum documents in ChromaDB, and Gemma-powered Socratic cross-examination to isolate and resolve learning gaps.',
    howItWorks: [
      'Voice Input: Student speaks aloud, verbalizing a concept or asking an open-ended question.',
      'Spoken Instruction: Tutor responds with natural voice instruction grounded in curriculum context via ChromaDB.',
      'Verbal Cross-Questions: System asks targeted spoken follow-up questions to probe conceptual depth.',
      'Knowledge Gap Detection: Evaluates the spoken answer semantically to identify latent misconceptions.',
      'Adaptive Speech Tutoring: Recalibrates pedagogical pacing and verbally reinforces core principles.'
    ],
    visualType: 'echolearn',
    hasFullDetails: true,
    githubUrl: 'https://github.com/aarnav-devs'
  },
  {
    id: 'fitclik',
    number: '02',
    title: 'FITCLIK',
    category: 'Activity Tracking & Fitness Analytics',
    tagline: 'Integrated health platform unifying GPS running analytics, nutrition monitoring, and social engagement.',
    filterCategory: 'data-science',
    isFeatured: true,
    technologies: ['Activity Tracking', 'Running Analytics', 'Nutrition Tracking', 'Maps / GPS', 'Social Engagement'],
    overview: 'FITCLIK brings together comprehensive fitness logging, GPS-based route mapping, running performance analytics, and daily nutritional tracking into a cohesive social health application. Designed to encourage sustained athletic habits through actionable telemetry and community sharing.',
    problem: 'Athletes often juggle disconnected apps for GPS route tracking, calorie/macro logging, and peer encouragement.',
    approach: 'Synthesizes route telemetry, cadence, pace zones, and nutrition data into unified athletic profiles with interactive feed interaction.',
    howItWorks: [
      'Activity: Records GPS route vectors, pace, distance, and elevation profiles.',
      'Analytics: Calculates split variations, heart-rate zones, and weekly performance trends.',
      'Nutrition: Monitors caloric balance, macro ratios, and hydration intake.',
      'Social: Connects athletes to share verified milestones, routes, and workout logs.'
    ],
    visualType: 'fitclik',
    hasFullDetails: true,
    githubUrl: 'https://github.com/aarnav-devs'
  },
  {
    id: 'friday',
    number: '03',
    title: 'Friday',
    category: 'Personal AI Desktop Assistant',
    tagline: 'Conversational voice assistant built for hands-free desktop control and task automation.',
    filterCategory: 'ai-ml',
    isFeatured: true,
    technologies: ['Voice Assistant', 'Conversational AI', 'Desktop Automation', 'Speech Processing', 'Python'],
    overview: 'Friday is a conversational desktop assistant inspired by futuristic voice-first interfaces. Operating locally on the workstation, Friday processes natural speech commands to query information, manage tasks, control playback, and automate routine desktop workflows.',
    problem: 'Context switching between multiple productivity apps disrupts deep work and creates unnecessary friction.',
    approach: 'Combines real-time speech recognition, natural language intent parsing, and local desktop execution hooks into a responsive, voice-activated companion.',
    howItWorks: [
      'Voice Capture: Continuous lightweight wake-phrase detection and high-fidelity speech capture.',
      'Intent Parsing: Maps conversational instructions to programmatic system actions.',
      'Execution Engine: Triggers local operating system scripts, file operations, and window management.',
      'Audio Response: Synthesizes low-latency verbal confirmation with real-time waveform display.'
    ],
    visualType: 'friday',
    hasFullDetails: true,
    githubUrl: 'https://github.com/aarnav-devs'
  },
  {
    id: 'retire',
    number: '04',
    title: 'Retire',
    category: 'Financial Modeling & Planning',
    tagline: 'Exploratory financial modeling framework for long-term retirement planning.',
    filterCategory: 'data-science',
    isFeatured: false,
    technologies: ['Data Analysis', 'Python', 'Financial Modeling'],
    overview: 'A data-driven computational model exploring retirement scenarios, capital accumulation curves, and market variance trajectories.',
    howItWorks: [
      'Parameter Ingestion: Accepts asset allocation, savings rates, and target retirement timelines.',
      'Projection Engine: Computes compounding trajectories under varying withdrawal strategies.'
    ],
    visualType: 'minimal',
    hasFullDetails: false
  },
  {
    id: 'workx',
    number: '05',
    title: 'Workx',
    category: 'Productivity & Workflow Management',
    tagline: 'Minimalist workflow optimization tool for developer and research sprints.',
    filterCategory: 'software',
    isFeatured: false,
    technologies: ['Software Engineering', 'Workflow Automation'],
    overview: 'Workx is an experimental system engineered to streamline daily task pipelines, research note organization, and project execution rhythms.',
    howItWorks: [
      'Sprint Segmentation: Structures tasks into focused, non-distracting execution blocks.',
      'Progress Tracing: Records completed milestone states across active project workstreams.'
    ],
    visualType: 'minimal',
    hasFullDetails: false
  },
  {
    id: 'robosumobot',
    number: '06',
    title: 'RoboSumoBot',
    category: 'Autonomous Robotics & Hardware',
    tagline: 'Custom autonomous sumo robot engineered with sensory spatial edge detection and motor control.',
    filterCategory: 'robotics',
    isFeatured: false,
    technologies: ['Robotics', 'Microcontrollers', 'Sensor Fusion', 'Motor Control'],
    overview: 'RoboSumoBot is an autonomous combat robot developed to compete in bounded dohyo arenas. Utilizes infrared optical line sensors to detect ring boundaries and ultrasonic distance sensors for rapid opponent tracking and defensive maneuvering.',
    problem: 'Autonomous ring navigation requires microsecond edge detection to avoid self-elimination while executing aggressive pushing strategies.',
    approach: 'Implemented closed-loop sensor-actuator control loops prioritizing ring-edge avoidance over opponent engagement, coupled with high-torque gear motors.',
    howItWorks: [
      'Edge Detection: Optical ground sensors monitor reflectance boundaries along ring limits.',
      'Target Acquisition: Ultrasonic ranging sweeps for opposing robots.',
      'Motor Actuation: Instantaneous differential steering shifts from search to high-traction push.'
    ],
    visualType: 'robosumo',
    hasFullDetails: true
  },
  {
    id: 'queue',
    number: '07',
    title: 'Queue',
    category: 'Queue Systems & Flow Simulation',
    tagline: 'Algorithmic visualization and management system for service queue dynamics.',
    filterCategory: 'software',
    isFeatured: false,
    technologies: ['Data Structures', 'Simulation', 'Python', 'Algorithms'],
    overview: 'An interactive queue simulation analyzing arrival distributions, service latency, and bottleneck mitigation in multi-server architectures.',
    howItWorks: [
      'Event Dispatch: Generates Poisson or uniform arrival events.',
      'Buffer Allocation: Routes incoming entities across designated servicing nodes.',
      'Throughput Metric: Measures wait times, queue depth, and idle cycles.'
    ],
    visualType: 'queue',
    hasFullDetails: true
  },
  {
    id: 'house-rate-predictor',
    number: '08',
    title: 'House Rate Predictor',
    category: 'Machine Learning & Valuation Modeling',
    tagline: 'Multivariate regression model predicting residential property valuations from structural features.',
    filterCategory: 'data-science',
    isFeatured: false,
    technologies: ['Machine Learning', 'Python', 'Regression Analysis', 'Data Analysis'],
    overview: 'A supervised machine learning model that predicts property valuations based on tabular features including square footage, bedroom/bathroom ratios, geographic zones, and historical transaction trends.',
    problem: 'Uncovering non-linear relationships and outlier effects in real estate market valuation datasets.',
    approach: 'Feature engineering, normalization, and evaluation across multiple regression algorithms to achieve reliable valuation estimations.',
    howItWorks: [
      'Feature Extraction: Cleans numerical attributes and encodes categorical regional parameters.',
      'Model Inference: Generates predicted valuation with feature importance attributions.'
    ],
    visualType: 'houserate',
    hasFullDetails: true
  },
  {
    id: 'hollodesk',
    number: '09',
    title: 'Hollodesk',
    category: 'Spatial & Workspace Interface',
    tagline: 'Experimental workspace interface exploration for augmented desktop interaction.',
    filterCategory: 'software',
    isFeatured: false,
    technologies: ['Interface Design', 'Human-Computer Interaction'],
    overview: 'Hollodesk explores future computer interaction paradigms, bridging physical desk boundaries with digital workspace information layers.',
    visualType: 'minimal',
    hasFullDetails: false
  },
  {
    id: 'farmx',
    number: '10',
    title: 'FarmX',
    category: 'Agricultural Data Intelligence',
    tagline: 'Data-driven environmental monitoring and soil telemetry analysis for modern agriculture.',
    filterCategory: 'data-science',
    isFeatured: false,
    technologies: ['Data Analysis', 'Sensor Telemetry', 'Python', 'Predictive Modeling'],
    overview: 'FarmX is an agricultural intelligence concept designed to aggregate soil moisture readings, microclimate indices, and environmental sensor streams into actionable cultivation insights.',
    problem: 'Traditional farming often lacks granular, field-level sensor visibility to optimize irrigation and nutrient delivery.',
    approach: 'Integrates distributed sensor measurements with predictive moisture threshold models to assist in resource conservation.',
    howItWorks: [
      'Sensor Collection: Gathers ground moisture, ambient temperature, and humidity.',
      'Telemetry Analysis: Compares real-time readings against optimal crop thresholds.',
      'Advisory Generation: Suggests irrigation timing and anomalies before crop stress occurs.'
    ],
    visualType: 'farmx',
    hasFullDetails: true
  }
];
