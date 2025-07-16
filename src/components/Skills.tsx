import { FC } from 'react';

const categories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', img: '/images/react.png' },
      { name: 'TypeScript', img: '/images/ts.png' },
      { name: 'Vue.js', img: '/images/vue.png' },
      { name: 'Storybook', img: '' },
      { name: 'Hono', img: '/images/hono.png' },
    ],
  },
  {
    title: 'Styling & UI',
    skills: [
      { name: 'Tailwind CSS', img: '/images/tailwind.png' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', img: '/images/python.png' },
      { name: 'PHP', img: '/images/php.png' },
      { name: 'C#', img: '/images/c.png' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', img: '/images/mysql.png' },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'AWS', img: '/images/aws.png' },
      { name: 'GCP', img: '/images/gcp.png' },
      { name: 'Cloudflare', img: '/images/cloudflare.png' },
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Stripe', img: '/images/stripe.png' },
      { name: 'Zapier', img: '/images/zapier.png' },
      { name: 'LINE', img: '/images/line.png' },
      { name: 'Docker', img: '/images/docker.png' },
      { name: 'Contentful', img: '/images/contentful.png' },
    ],
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', img: '/images/figma.png' },
      { name: 'Photoshop', img: '/images/photoshop.png' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Notion', img: '/images/notion.png' },
      { name: 'Salesforce', img: '/images/salesforce.png' },
    ],
  },
];

const Skills: FC = () => (
  <section className="px-6 py-32 bg-gray-900/30">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl md:text-6xl font-black mb-4">Skills</h3>
      <h4 className="text-2xl md:text-4xl font-bold mb-8 text-gray-400">What I can do</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((cat) => (
          <div key={cat.title} className="flex flex-col">
            <h4 className={`text-lg md:text-xl font-bold mb-4 text-center`}>{cat.title}</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="aspect-square bg-gray-900/50 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-4 hover:bg-gray-800/70 hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-800/50 hover:border-gray-700 group">
                  {skill.img && <img src={skill.img} alt={skill.name} className="h-10 w-10 object-contain mb-2" />}
                  <span className="text-xs md:text-sm text-center font-bold group-hover:text-gray-300 transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 