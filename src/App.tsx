import { useState, useEffect } from 'react'
import Header from './components/Header'
import ParallaxText from './components/ParallaxText'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Products from './components/Products'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

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
      <Header currentTime={currentTime} formatTime={formatTime} />
      <ParallaxText scrollY={scrollY} />
      <main className="pt-20">
        <Hero />
        <section id="about">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="blog">
          <div className="min-h-[300px] flex items-center justify-center text-gray-400 text-xl">Blog section (準備中)</div>
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
