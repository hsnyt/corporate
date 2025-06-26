import { FC, useState } from 'react';

interface HeaderProps {
  currentTime: Date;
  formatTime: (date: Date) => string;
}

const Header: FC<HeaderProps> = ({ currentTime, formatTime }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <a href="/">
            <h1 className="text-2xl font-black tracking-tight hover:text-gray-300 transition-colors cursor-pointer">Yuta Hoshino</h1>
          </a>
          <div className="text-sm text-gray-400 font-mono">
            Tokyo, {formatTime(currentTime)}
          </div>
        </div>
        {/* PC用ナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">About</a>
          <a href="#experience" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Experience</a>
          <a href="#skills" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Skills</a>
          <a href="#products" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Product</a>
          <a href="#blog" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Blog</a>
          <a href="#contact" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Contact</a>
        </nav>
        {/* ハンバーガーメニュー */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>
      {/* モバイル用ナビゲーション */}
      {open && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-gray-800 flex flex-col items-center py-6 space-y-4 z-50">
          <a href="#about" className="text-base font-medium hover:text-gray-300 transition-all duration-300" onClick={() => setOpen(false)}>About</a>
          <a href="#experience" className="text-base font-medium hover:text-gray-300 transition-all duration-300" onClick={() => setOpen(false)}>Experience</a>
          <a href="#skills" className="text-base font-medium hover:text-gray-300 transition-all duration-300" onClick={() => setOpen(false)}>Skills</a>
          <a href="#products" className="text-base font-medium hover:text-gray-300 transition-all duration-300" onClick={() => setOpen(false)}>Product</a>
          <a href="#blog" className="text-base font-medium hover:text-gray-300 transition-all duration-300" onClick={() => setOpen(false)}>Blog</a>
          <a href="#contact" className="text-base font-medium hover:text-gray-300 transition-all duration-300" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header; 