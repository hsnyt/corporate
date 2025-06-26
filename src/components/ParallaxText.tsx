import { FC } from 'react';

interface ParallaxTextProps {
  scrollY: number;
}

const ParallaxText: FC<ParallaxTextProps> = ({ scrollY }) => (
  <div
    className="fixed top-1/2 left-0 transform -translate-y-1/2 z-10 pointer-events-none"
    style={{ transform: `translateY(-50%) translateX(${scrollY * 0.5}px)` }}
  >
    <div className="animate-scroll-left whitespace-nowrap text-8xl md:text-9xl font-black text-gray-900/10 select-none">
      HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT
    </div>
  </div>
);

export default ParallaxText;  