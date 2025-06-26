import { FC } from 'react';

const Experience: FC = () => (
  <section className="px-6 py-32">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl md:text-6xl font-black mb-16">Experience</h3>
      {/* <h4 className="text-2xl md:text-4xl font-bold mb-8 text-gray-400">What I Do</h4> */}
      <div className="space-y-12">
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-2xl font-bold mb-2">Web Developer</h4>
          <p className="text-gray-400 mb-4">2024.04 - Present</p>
          <p className="text-lg">description</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-2xl font-bold mb-2">Freelance Developer 💻</h4>
          <p className="text-gray-400 mb-4">2023.10 - 2024.04</p>
          <p className="text-lg">description</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-2xl font-bold mb-2">Freelance Developer</h4>
          <p className="text-gray-400 mb-4">2022.04 - 2023.09</p>
          <p className="text-lg">description</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-2xl font-bold mb-2">Clinical engineering student 👨‍⚕️</h4>
          <p className="text-gray-400 mb-4">2018.04 - 2022.03</p>
          <p className="text-lg">description</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-2xl font-bold mb-2">Born 👶</h4>
          <p className="text-gray-400 mb-4">1999</p>
          <p className="text-lg">description</p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 