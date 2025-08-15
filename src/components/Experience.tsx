import { FC } from 'react';

const Experience: FC = () => (
  <section className="px-6">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl md:text-6xl font-black mb-4">Career</h3>
      {/* <h4 className="text-2xl md:text-4xl font-bold mb-8 text-gray-400">What I Do</h4> */}
      <div className="space-y-12">
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Web Developer</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2023.10 - Present</p>
          <p className="text-sm md:text-lg">オーラルテック領域の企業で、UXの企画立案から開発・保守を担当</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Infrastructure Support Engineer</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2022.04 - 2023.09</p>
          <p className="text-sm md:text-lg">エンドユーザー向けの印刷システムとオフィスIT機器のハードウェアメンテナンスとテクニカルなサポートを担当</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Clinical engineering student 👨‍⚕️</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2018.04 - 2022.03</p>
          <p className="text-lg">看護師の母の影響から、臨床工学技士を目指す</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Born 👶</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">1999</p>
          <p className="text-sm md:text-lg">埼玉県出身</p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 