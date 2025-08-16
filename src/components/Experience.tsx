import { FC } from 'react';

const Experience: FC = () => (
  <section className="px-6">
    <div className="max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Web Engineer</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2024.04 - Present</p>
          <p className="text-sm md:text-lg">オーラルテック領域の企業で、エンドユーザー向けのLINE内体験、業務システムCRMの企画立案・開発・保守までを担当</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Freelance Engineer</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2022.010 - 2024.04</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Infrastructure Support Engineer</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2022.04 - 2023.09</p>
          <p className="text-sm md:text-lg">エンドユーザー向けの印刷システムとオフィスIT機器のハードウェア・ソフトウェアメンテナンスとテクニカルなサポートを担当</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Clinical Engineering Student 👨‍⚕️</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">2018.04 - 2022.03</p>
          <p className="text-sm md:text-lg">看護師の母の影響から、臨床工学技士を目指す</p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Born 👶</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">1999.05</p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 