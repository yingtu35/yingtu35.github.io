import './App.css';
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
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
