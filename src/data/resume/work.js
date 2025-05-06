/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Bloomberg Center for Government Excellence, GovEx',
    position: 'Data Consultant',
    url: 'https://govex.jhu.edu/',
    startDate: '2023-06-12',
    summary: 'GovEx helps governments use data and AI creatively and effectively to improve the lives of residents across the United States and around the globe.',
    highlights: [
      'Led the data integration and processing for a city-wide dashboard visualizing socioeconomic indicators for 100 U.S. cities, ensuring accurate and timely reporting.',
      'Co-led an initiative to monitor and track federal dataset removals under the new U.S. administration, leveraging APIs, Python, and GitHub Actions for automated detection and reporting.',
      'Conducted geoprocessing to map water systems in relation to cities, aiming to evaluate and improve access to clean drinking water. (Python, QGIS)',
      'Built scalable ETL pipelines processing 6M+ observations from 12 data sources, achieving 80% faster processing speeds through parallel computing (Python, SQL).',
      'Optimized PostgreSQL export processes, reducing runtime by 75% with incremental updates, enabling faster and more efficient data transfers.',
      'Implemented rigorous data validation protocols, reducing errors by 70%, ensuring data integrity and reliability for visualization and reporting.',
    ],
  },
  {
    name: 'The Coleridge Initiative, Inc',
    position: 'Associate Research Scientist',
    url: 'https://coleridgeinitiative.org/',
    startDate: '2021-07-22',
    endDate: '2024-06-09',
    summary: `The Coleridge Initiative is a nonprofit that supports governments in leveraging data for informed decision-making. 
    It provides the Administrative Data Research Facility (ADRF), a secure, FedRAMP-authorized platform for linking confidential data across agencies. 
    Through its Applied Data Analytics (ADA) training, it equips state and federal staff with modern data skills, enabling them to analyze their own data and develop open-source tools for long-term impact.`,
    highlights: [
      'Designed and optimized data pipelines to process over 500 million records in AWS Redshift, improving data ingestion, transformation, and reporting efficiency.',
      'Applied predictive analytics and unsupervised machine learning to uncover demographic trends in workforce data, providing actionable insights into wage patterns.',
      'Developed and improved data workflows to link administrative datasets, enabling streamlined reporting and data-driven decision-making (Python, R, SQL).',
      'Collected, processed, and visualized labor market data to analyze unemployment trends in Illinois and Indiana, providing actionable insights for workforce policy and economic decision-making (Python, SQL, Tableau).',
      'Led training sessions for 30+ public sector officials on data analytics for education and workforce policy, covering data quality, imputation, and predictive modeling techniques to support policymaking.',
    ],
  },
  {
    name: 'Energy Policy Institute, University of Chicago, EPIC',
    position: 'Bartlett Fellow',
    url: 'https://epic.uchicago.edu/',
    startDate: '2020-10-01',
    endDate: '2021-06-01',
    summary: `The Energy Policy Institute at Chicago (EPIC) is a research and training institute that examines the economic and social impacts of energy policies.
    `,
    highlights: [
      'Leveraged Python and Stata to develop project pipelines and provide quantitative support for studying the impact of North American fishery laws on sustainable fishing policy',
      'Used OCR packages in Python to gather nd process data to understand the impact of DDT pesticides on mortality rates between 1942-1970',
    ],
  },
  {
    name: 'Center for Health and Social Sciences, CHeSS',
    position: 'Part-time Data Assistant',
    url: 'https://chess.uchicago.edu/',
    startDate: '2020-05-01',
    endDate: '2021-04-01',
    summary: `CHeSS supports interdisciplinary health research and training initiatives across the University of Chicago.
    `,
    highlights: [
      'Conducted analysis on 7TB of health insurance claims data (MS-SQL, Stata) to generate insights on comorbidity-related mortality risk to support health policy research. Implemented propensity score matching to ensure balanced datasets.',
      'Automated data workflows and reporting processes using Python and Stata, reducing turnaround time by 50% and improving operational efficiency',
    ],
  },
  {
    name: 'Center for Economic Research Pakistan (CERP)',
    position: 'Research Assistant',
    url: 'https://www.cerp.org.pk/',
    startDate: '2018-07-01',
    endDate: '2019-06-30',
    summary: `CERP is an impact-driven organization that aims to improve decision-making through research, advanced analytics, capacity building, data collection, and advisory services for both public and private sectors.
    `,
    highlights: [
      'Supported the implementation of a Randomized Controlled Trial (RCT) to analyze the impact of women-only transport on female mobility, employment, and job outcomes, providing data-driven insights for policy decisions.',
      'Designed and maintained data integration processes to link household and labor market datasets with over 200,000 observations, enabling in-depth analysis of job search behavior.',
      'Trained 30+ field researchers on data collection, validation, and management using SurveyCTO, ensuring data quality and consistency for analytical reporting.',
    ],
  },
];

export default work;
