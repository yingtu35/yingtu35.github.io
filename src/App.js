import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import AllProjects from "./components/Projects/AllProjects"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header"
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn';
import Experiences from './components/Experiences/Experiences';

function App() {
  return (
    <div className='App container'>
      <Routes>
        <Route path={"/"} element={
          <>
            <Header />
            <Home />
            <About />
            <Experiences />
            <Projects />
            <Contact />
          </>
        } />
        <Route path={"/projects"} element={<AllProjects />} />
        <Route path={"*"} element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

export default App;
