import { SkillNode } from '../types/portfolio';

export const SKILLS: SkillNode[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'core',
    description: 'Primary programming language for data structures, statistical computing, ML modeling, and automation scripts.'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'core',
    description: 'Relational database querying, schema design, table joins, aggregations, and tabular data extraction.'
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'data',
    description: 'Efficient numerical computing with multidimensional arrays, vectorized operations, and foundational statistical calculations.'
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'data',
    description: 'Data cleaning, transformation, joining, and exploratory analysis with Series and DataFrames.'
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    category: 'data',
    description: 'Creating clear, informative visualizations to explore distributions, compare trends, and communicate findings.'
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'data',
    description: 'Building and evaluating machine-learning workflows for preprocessing, classification, regression, and clustering.'
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'ai',
    description: 'Supervised and unsupervised algorithms, regression, classification, clustering, validation strategies, and hyperparameter tuning.'
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    category: 'ai',
    description: 'Neural network architectures, tensor operations, backpropagation, latent representations, and vector embeddings.'
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    category: 'ai',
    description: 'Large language models (Gemma), prompt engineering, retrieval-augmented generation (RAG), vector stores (ChromaDB).'
  },
  {
    id: 'robotics',
    name: 'Robotics',
    category: 'systems',
    description: 'Sensor integration, microcontrollers, closed-loop actuator feedback, autonomous navigation, and spatial edge detection.'
  }
];

export const PIPELINE_STEPS = [
  { step: '01', title: 'DATA', desc: 'Raw ingestion, normalization, feature telemetry' },
  { step: '02', title: 'ANALYZE', desc: 'Exploratory data analysis & statistical correlation' },
  { step: '03', title: 'MODEL', desc: 'Algorithmic training, vector embedding, evaluation' },
  { step: '04', title: 'INTELLIGENCE', desc: 'Semantic inference, gap detection, reasoning' },
  { step: '05', title: 'PRODUCT', desc: 'Interactive systems solving tangible real-world problems' }
];
