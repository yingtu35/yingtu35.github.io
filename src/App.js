import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import AllProjects from "./components/AllProjects"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  return (
    <div className='App container'>
      <Routes>
        <Route path={"/"} element={
          <>
            <Header />
            <Home />
            <About />
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
