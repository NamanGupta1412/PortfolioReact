import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { Timeline } from './components/Timeline'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LocomotiveScroll from 'locomotive-scroll';
import Paragraph from './components/Para'



function App() {


  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-white text-black font-mono overflow-hidden'>
    <Hero />
    <About />
    <Projects />
    <Timeline />
    <Contact />
    </div>
    // <Paragraph />
  )
}

export default App
