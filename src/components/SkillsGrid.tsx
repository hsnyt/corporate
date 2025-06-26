import { FC } from 'react';

const SkillsGrid: FC = () => (
  <section className="px-6 py-32 bg-gradient-to-b from-gray-900/30 to-black">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl md:text-6xl font-black mb-4">Skills</h3>
      <p className="text-lg md:text-2xl mb-20 text-gray-300 max-w-4xl">Bringing ideas to life through code and creativity.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
        {[
          {
            title: "01 Frontend",
            items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
          },
          {
            title: "02 Backend",
            items: ["Node.js", "Express", "Python", "API Development", "Database Design"]
          },
          {
            title: "03 Mobile",
            items: ["React Native", "Flutter", "Progressive Web Apps", "Responsive Design", "Mobile First"]
          },
          {
            title: "04 Tools",
            items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"]
          },
          {
            title: "05 Design",
            items: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
          }
        ].map((skill) => (
          <div key={skill.title} className="group">
            <h5 className="text-xl md:text-2xl font-black mb-6 group-hover:text-gray-300 transition-colors duration-300">skill.title</h5>
            <ul className="text-sm md:text-base space-y-3 text-gray-400">
              {skill.items.map((item) => (
                <li key={item} className="group-hover:text-gray-300 transition-colors duration-300 hover:text-white cursor-default">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsGrid; 