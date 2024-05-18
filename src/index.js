import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  colors: {
    light: "#F6D55C",
    white: {
      100: "#808080",
      200: "#fafafa",
      300: "#808080",
      400: "#f1f1f1",
      500: "#808080",
      600: "#808080",
      700: "#dfdfdf",
      800: "#d8d8d8",
      900: "#808080",
    },
    lam: {
      100: "#20a785", // dark mode default
      200: "#20a785",
      300: "#32E8BA", // dark mode hover
      400: "#32E8BA",
      500: "#20a785", // light mode default
      600: "#1a8066", // light mode hover
      700: "#32E8BA",
      800: "#32E8BA",
      900: "#32E8BA",
    }
  },
  
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal"
      }
    }
  },
  config: {
    disableTransitionOnChange: false,
    initialColorMode: 'dark',
    useSystemColorMode: true,
  }
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
