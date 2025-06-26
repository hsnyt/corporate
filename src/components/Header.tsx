import { FC } from 'react';

interface HeaderProps {
  currentTime: Date;
  formatTime: (date: Date) => string;
}

const Header: FC<HeaderProps> = ({ currentTime, formatTime }) => (
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
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">About</a>
        <a href="#experience" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Experience</a>
        <a href="#skills" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Skills</a>
        <a href="#products" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Product</a>
        <a href="#blog" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Blog</a>
        <a href="#contact" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Contact</a>
      </nav>
      {/* Mobile menu button */}
      <button className="md:hidden p-2">
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white" />
      </button>
    </div>
  </header>
);

export default Header; 