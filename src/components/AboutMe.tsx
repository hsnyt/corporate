import { FC } from 'react';

const AboutMe: FC = () => (
    <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 pt-10">
        {/* About Me セクション */}
        <section className="px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h3 className="text-2xl md:text-4xl font-black mb-12 text-gray-400">About me</h3>
                <div className="flex justify-center mb-8">
                    <img
                        src="/images/me.png"
                        alt="HSNYT Logo"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
                    />
                </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/5 to-transparent" />
        </section>

        {/* Skills セクション */}
        <section className="px-6 pt-10">
            <div className="max-w-7xl mx-auto">
                {/* Skill 1 */}
                <div className="mb-40 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black mb-4 text-gray-500 group-hover:text-white transition-colors duration-500">Growth Hack</h3>
                            <p className="text-sm text-gray-500 mb-4 tracking-wider">
                                データドリブン × 爆速実装
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                データドリブンな判断指針で施策を設計・実行してきました。
                                ただ数字を追うだけでなく、UIや通知文の細部までこだわり、他にない魅力の伝え方を心がけています。
                            </p>
                        </div>
                        <div className="group-hover:scale-105 transition-transform duration-700 ease-out">
                            <div className="w-full h-80 bg-gradient-to-br from-orange-500/80 to-red-400/20 rounded-lg flex items-center justify-center border border-gray-800">
                                <div className="text-6xl">🚀</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skill 2 */}
                <div className="mb-40 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 group-hover:scale-105 transition-transform duration-700 ease-out">
                            <div className="w-full h-80 bg-gradient-to-br from-blue-500/70 to-indigo-400/20 rounded-lg flex items-center justify-center border border-gray-800">
                                <div className="text-6xl">📦</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black mb-4 text-gray-500 group-hover:text-white transition-colors duration-500">Product</h3>
                            <p className="text-sm text-gray-500 mb-4 tracking-wider">
                                UXの改善と業務システム開発・運用・保守
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                LINEを活用したユーザー体験の改善に取り組み、常にユーザーファーストな体験を提供しています。
                                また、プロダクトを支える業務システムの設計・開発・運用・保守も担当し、データ管理や社内プロセスの効率化を推進しています。
                                フロントからバックエンドまで幅広く手を動かし、プロジェクトを着実に前進させます。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutMe;
