import './App.css'
import './responsive.css'
import AboutSection from './component/about-section'
import Footer from './component/footer'
import Header from './component/header'
import ProcessSection from './component/process-section'
import ProjectSection from './component/projects'
import ProjectScroll from './component/projects-scroll'
import SectionOne from './component/section-one'

function App() {

  return (
    <>
      <Header/>
      <SectionOne/>
      <AboutSection/>
      <ProjectSection/>
      <ProcessSection/>
      <ProjectScroll/>
      <Footer/>
    </>
  )
}

export default App
