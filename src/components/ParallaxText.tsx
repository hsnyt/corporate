import { FC, useEffect, useState } from 'react';

interface ParallaxTextProps {
  scrollY: number;
}

const codeLines = [
  'import React, { useState, useEffect } from "react";',
  'const fetchData = async (url) => {',
  '  const res = await fetch(url);',
  '  if (!res.ok) throw new Error("Network error");',
  '  return await res.json();',
  '};',
  '',
  'function App() {',
  '  const [data, setData] = useState(null);',
  '  useEffect(() => {',
  '    fetchData("/api/data").then(setData);',
  '  }, []);',
  '  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;',
  '}',
  '',
  'export default App;'
];
const repeatCount = 6; // 横方向の繰り返し数
const verticalRepeat = 6; // Heroの高さを覆うための縦方向の繰り返し数
const typingSpeed = 12; // 1文字あたりのms

const ParallaxText: FC<ParallaxTextProps> = ({ scrollY }) => {
  const [typedLengths, setTypedLengths] = useState<number[]>(Array(codeLines.length * verticalRepeat).fill(0));

  useEffect(() => {
    const timers: number[] = [];
    for (let i = 0; i < codeLines.length * verticalRepeat; i++) {
      timers[i] = window.setTimeout(() => {
        const interval = window.setInterval(() => {
          setTypedLengths(prev => {
            const next = [...prev];
            if (next[i] < codeLines[i % codeLines.length].length * repeatCount) {
              next[i]++;
            }
            return next;
          });
        }, typingSpeed);
        timers.push(interval);
      }, i * 120);
    }
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex flex-col justify-between overflow-x-hidden">
      {Array.from({ length: codeLines.length * 5 }).map((_, i) => {
        const line = Array(repeatCount).fill(codeLines[i % codeLines.length]).join('   ');
        const visible = line.slice(0, typedLengths[i]);
        return (
          <div
            key={i}
            className="font-mono text-[1.1rem] md:text-2xl font-black opacity-60 select-none whitespace-nowrap leading-loose"
            style={{
              background: 'linear-gradient(90deg, #00ff99cc 0%, #00cfffcc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              textShadow: '0 0 8px #00ff99cc, 0 0 16px #00cfffcc',
              letterSpacing: '0.03em',
              opacity: 0.5
            }}
          >
            {visible}
            <span className="animate-pulse">|</span>
          </div>
        );
      })}
    </div>
  );
};

export default ParallaxText;  