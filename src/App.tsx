import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Welcome from './components/Welcome'
import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Container>
        <Navbar />
        <Welcome />
        <About />
        <Skill />
        <Education />
        <Contact />
        <Footer />
      </Container>
    </motion.div>
  )
}

export default App
