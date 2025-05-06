const skills = [
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Cloud Computing'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'D3',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 3,
    category: ['Cloud Computing'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'AWS ECR and ECS',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['IDE'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Data Engineering', 'Data Science'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Stata',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'GraphQL',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Python', 'Data Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'GitHub Actions',
    competency: 2,
    category: ['Workflow Orchestration'],
  },
  {
    title: 'GitHub',
    competency: 4,
    category: ['Version Control'],
  },
  {
    title: 'AirTable',
    competency: 4,
    category: ['Data Management'],
  },
  {
    title: 'SurveyCTO',
    competency: 3,
    category: ['Data Management'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
