import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Header from "./components/Header"
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    white: {
      100: "#ffffff",
      200: "#fafafa",
      300: "f6f6f6",
      400: "f1f1f1",
      500: "#eaeaea",
      600: "e5e5e5",
      700: "dfdfdf",
      800: "d8d8d8",
      900: "#808080",
    }
  }
})
function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className='container'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    </ChakraProvider>
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
