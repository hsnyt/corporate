import { FC, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ParallaxText from './ParallaxText';

const Hero: FC = () => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <ParallaxText scrollY={0} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
            <span className="block text-white drop-shadow-lg tracking-wide md:tracking-wider">
              <Typewriter
                words={["Web Developer"]}
                loop={1}
                cursor={false}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
                onType={() => {}}
                onLoopDone={() => setShowSecond(true)}
              />
            </span>
            {showSecond && (
              <span className="block text-white drop-shadow-lg tracking-wide md:tracking-wider text-2xl md:text-4xl mt-4">
                <Typewriter
                  words={["Based in Tokyo"]}
                  loop={1}
                  cursor={false}
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            )}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero; 