import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Tokyo',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-black tracking-tight hover:text-gray-300 transition-colors cursor-pointer">Yuta Hoshino</h1>
            <div className="text-sm text-gray-400 font-mono">
              Tokyo, {formatTime(currentTime)}
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Home</a>
            <a href="/skills" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Skills</a>
            <a href="/product" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Product</a>
            <a href="/blog" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Blog</a>
            <a href="/contact" className="text-sm font-medium hover:text-gray-300 transition-all duration-300 hover:scale-105">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </header>

      {/* Scrolling HSNYT Text with parallax */}
      <div
        className="fixed top-1/2 left-0 transform -translate-y-1/2 z-10 pointer-events-none"
        style={{ transform: `translateY(-50%) translateX(${scrollY * 0.5}px)` }}
      >
        <div className="animate-scroll-left whitespace-nowrap text-8xl md:text-9xl font-black text-gray-900/10 select-none">
          HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT HSNYT
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  WEB DEVELOPER
                </span>
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  BASED IN TOKYO
                </span>
              </h2>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Building modern web experiences with cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-6 py-32">
          <div className="max-w-7xl mx-auto">
            {/* Skill 1 */}
            <div className="mb-40 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-6xl md:text-8xl font-black mb-4 text-gray-500 group-hover:text-white transition-colors duration-500">01</h3>
                  <h4 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-gray-300 transition-colors duration-500">FRONTEND DEVELOPMENT</h4>
                  <p className="text-sm text-gray-500 mb-4 tracking-wider">
                    React / Next.js / TypeScript / Vue.js
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Creating responsive and interactive user interfaces with modern JavaScript frameworks and libraries.
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
                  <h4 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-gray-300 transition-colors duration-500">BACKEND<br />DEVELOPMENT</h4>
                  <p className="text-sm text-gray-500 mb-4 tracking-wider">
                    Node.js / Python / API Design / Database
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Building scalable server-side applications and RESTful APIs with various backend technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Statement */}
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

        {/* Projects Grid */}
        <section className="px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black mb-16 text-center">PRODUCTS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                'WEB APPLICATION',
                'E-COMMERCE SITE',
                'MOBILE APP',
                'API DEVELOPMENT',
                'PORTFOLIO SITE',
                'LANDING PAGE',
                'DASHBOARD',
                'COMING SOON'
              ].map((project) => (
                <div key={project} className="aspect-square bg-gray-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center p-4 hover:bg-gray-800/70 hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-800/50 hover:border-gray-700 group">
                  <span className="text-xs md:text-sm text-center font-bold group-hover:text-gray-300 transition-colors duration-300">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-6 py-32 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black mb-16">(Technologies)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="hover:scale-110 transition-transform duration-300 text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <p className="text-sm font-medium">React</p>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 text-center">
                <div className="text-4xl mb-4">📱</div>
                <p className="text-sm font-medium">Next.js</p>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 text-center">
                <div className="text-4xl mb-4">🟦</div>
                <p className="text-sm font-medium">TypeScript</p>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 text-center">
                <div className="text-4xl mb-4">🟢</div>
                <p className="text-sm font-medium">Node.js</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black mb-16">(Experience)</h3>
            <div className="space-y-12">
              <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
                <h4 className="text-2xl font-bold mb-2">Web Developer</h4>
                <p className="text-gray-400 mb-4">2023 - Present</p>
                <p className="text-lg">Building modern web applications with focus on user experience and performance optimization.</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
                <h4 className="text-2xl font-bold mb-2">Freelance Developer</h4>
                <p className="text-gray-400 mb-4">2022 - 2023</p>
                <p className="text-lg">Developed custom websites and applications for various clients across different industries.</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors duration-300">
                <h4 className="text-2xl font-bold mb-2">Self-taught Journey</h4>
                <p className="text-gray-400 mb-4">2021 - 2022</p>
                <p className="text-lg">Started learning web development through online courses and building personal projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-6 py-32 bg-gradient-to-b from-gray-900/30 to-black">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black mb-4">(Skills)</h3>
            <h4 className="text-2xl md:text-4xl font-bold mb-8 text-gray-400">What I Do</h4>
            <p className="text-lg md:text-2xl mb-20 text-gray-300 max-w-4xl">Bringing ideas to life through code and creativity.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              {[
                {
                  title: "01 Frontend",
                  items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
                },
                {
                  title: "02 Backend",
                  items: ["Node.js", "Express", "Python", "API Development", "Database Design"]
                },
                {
                  title: "03 Mobile",
                  items: ["React Native", "Flutter", "Progressive Web Apps", "Responsive Design", "Mobile First"]
                },
                {
                  title: "04 Tools",
                  items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"]
                },
                {
                  title: "05 Design",
                  items: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
                }
              ].map((skill) => (
                <div key={skill.title} className="group">
                  <h5 className="text-xl md:text-2xl font-black mb-6 group-hover:text-gray-300 transition-colors duration-300">{skill.title}</h5>
                  <ul className="text-sm md:text-base space-y-3 text-gray-400">
                    {skill.items.map((item) => (
                      <li key={item} className="group-hover:text-gray-300 transition-colors duration-300 hover:text-white cursor-default">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800/50 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-500 font-mono">@2023 hsnyt</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
