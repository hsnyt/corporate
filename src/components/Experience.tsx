import { FC } from "react";

const Experience: FC = () => (
  <section className="px-6">
    <div className="max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Web Engineer</h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">
            2023.10 - Present
          </p>
          <p className="text-sm md:text-lg">
            エンドユーザー向けのLINE内体験、業務システムCRMの企画立案・開発・保守までを担当
          </p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">
            Infrastructure Support Engineer
          </h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">
            2021.04 - 2023.09
          </p>
          <p className="text-sm md:text-lg">
            エンドユーザー向けの印刷システムとオフィスIT機器のハードウェア・ソフトウェアメンテナンスとテクニカルなサポートを担当
          </p>
        </div>
        <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
          <h4 className="text-xl md:text-2xl font-bold mb-2">
            Clinical Engineering Student
          </h4>
          <p className="text-gray-400 mb-4 text-sm md:text-md">
            2018.04 - 2022.03
          </p>
          <p className="text-sm md:text-lg">
            臨床工学技士を目指す
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
