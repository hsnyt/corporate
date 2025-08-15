import { FC } from 'react';

const Ability: FC = () => (
    <div>
        {/* Skills セクション */}
        <section className="px-6 pt-1">
            <div className="max-w-7xl mx-auto">
                {/* Skill 1 */}
                <div className="mb-10 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-3">
                            <h3 className="text-4xl md:text-6xl font-black mb-4 text-gray-500 group-hover:text-orange-400 transition-colors duration-500">Growth Hack</h3>
                            <p className="text-sm text-gray-500 mb-4 tracking-wider">
                                データドリブン × 爆速実装
                            </p>
                            <p className="text-sm md:text-xl leading-relaxed text-gray-500 group-hover:text-white transition-colors duration-500">
                                データドリブンな判断指針で施策を設計・実行してきました。
                                ただ数字を追うだけでなく、UIや通知文の細部までこだわり、他にない魅力の伝え方を心がけています。
                            </p>
                        </div>
                        <div className="group-hover:scale-110 transition-transform duration-700 ease-out">
                            <div className="w-full h-40 bg-gray-400 group-hover:bg-gradient-to-br group-hover:from-orange-500/80 group-hover:to-red-400/20 rounded-lg flex items-center justify-center border border-gray-800 transition-colors duration-500">
                                <div className="text-4xl">🚀</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skill 2 */}
                <div className="mb-14 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1 group-hover:scale-110 transition-transform duration-700 ease-out">
                            <div className="w-full h-40 bg-gray-400 group-hover:bg-gradient-to-br group-hover:from-blue-500/70 group-hover:to-indigo-400/20 rounded-lg flex items-center justify-center border border-gray-800 transition-colors duration-500">
                                <div className="text-4xl">📦</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black mb-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-500">Product</h3>
                            <p className="text-sm text-gray-500 mb-4 tracking-wider">
                                UXの改善と業務システム開発・運用・保守
                            </p>
                            <p className="text-sm md:text-xl leading-relaxed text-gray-500 group-hover:text-white transition-colors duration-500">
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

export default Ability;
