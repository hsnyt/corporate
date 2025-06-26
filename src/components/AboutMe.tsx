import { FC } from 'react';

const AboutMe: FC = () => (
    <div>
        {/* About Me セクション */}
        <section className="px-6 py-32 bg-gradient-to-b from-gray-900/50 to-gray-900/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3 className="text-2xl md:text-4xl font-black mb-12 text-gray-400">About me</h3>
            <h2 className="text-8xl md:text-[12rem] font-black leading-none">HSNYT</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
                Passionate about creating digital experiences that make a difference.
            </p>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/5 to-transparent" />
        </section>

        {/* Skills セクション（⚛️と🛠️） */}
        <section className="px-6 pt-32">
            <div className="max-w-7xl mx-auto">
                {/* Skill 1 */}
                <div className="mb-40 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h3 className="text-6xl md:text-8xl font-black mb-4 text-gray-500 group-hover:text-white transition-colors duration-500">01</h3>
                        <h4 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-gray-300 transition-colors duration-500">Still on the way</h4>
                        <p className="text-sm text-gray-500 mb-4 tracking-wider">
                        Something that loves me
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                        description
                        </p>
                    </div>
                    <div className="group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-gray-800">
                        <div className="text-6xl">⚛️</div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Skill 2 */}
                <div className="mb-40 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div className="w-full h-80 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-lg flex items-center justify-center border border-gray-800">
                        <div className="text-6xl">🛠️</div>
                        </div>
                    </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="text-6xl md:text-8xl font-black mb-4 text-gray-500 group-hover:text-white transition-colors duration-500">02</h3>
                            <h4 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-gray-300 transition-colors duration-500">Still on the way</h4>
                            <p className="text-sm text-gray-500 mb-4 tracking-wider">
                            my holiday
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                            description
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutMe; 