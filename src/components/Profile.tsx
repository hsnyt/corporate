import { FC } from 'react';

const Profile: FC = () => (
    <div className="mt-10">
        {/* About Me セクション */}
        <section className="px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h3 className="text-2xl md:text-4xl font-black mb-6 text-gray-400">Profile</h3>
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
    </div>
);

export default Profile;
