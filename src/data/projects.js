// TODO Add a couple lines about each project
const data = [
  {
    title: 'Understanding Brick Kilns in Punjab, Pakistan',
    link: 'https://rukhshanarifm.github.io/rukhshanarifm.github.io-brick-kilns-punjab/',
    image: '/images/projects/brick_kilns.jpg',
    date: '2021-03-20',
    desc:
      'I analyzed brick kiln distribution and worker demographics in Punjab,'
      + 'Pakistan using government survey data on ~6,800 kilns. The project highlights air pollution, poor working conditions, debt bondage, and child labor, which remain major concerns.'
      + 'By mapping kiln locations and examining age, wages, loan amounts, and access to health/education, the study provides insight into district-wise disparities and child labor prevalence across Punjab.',
  },
  {
    title: 'Mobile Applications: Legislation and Awareness related to Gender-Based Violence in Pakistan',
    link: 'https://www.youtube.com/watch?v=f4RK5pVCTME',
    image: '/images/projects/mobile_app.jpg',
    date: '2021-06-10',
    desc:
      'I created a prototype in Xcode to display legislation related to Gender-Based Violence (GBV) in Pakistan, '
      + 'sourced from UN Women. The app includes emergency helplines for Lahore, video resources on GBV, '
      + 'and an emergency call button. While limited by accessibility issues (no Urdu translation, low smartphone penetration, and iOS exclusivity), it serves as a basic framework for raising awareness.',
  },
  {
    title: 'Mapping gender-based violence in Pakistan',
    link: 'https://github.com/rukhshanarifm/LSC-Project',
    image: '/images/projects/mapping_gbv.jpg',
    date: '2020-12-15',
    desc:
      'I developed a Gender-Based Violence (GBV) mapping project in Pakistan using web scraping'
      + 'parallel computing (Dask), and NLP to analyze news articles from Dawn and The News.'
      + 'The project automates data collection, extracts article features, and performs exploratory analysis, geographic mapping, and topic modeling to uncover patterns in GBV-related incidents. While currently limited to English-language sources, the framework can be expanded with OCR for Urdu newspapers and scalable cloud deployment.',
  },
];

export default data;
