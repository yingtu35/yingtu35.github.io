import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  colors: {
    white: {
      100: "#ffffff",
      200: "#fafafa",
      300: "#f6f6f6",
      400: "#f1f1f1",
      500: "#eaeaea",
      600: "#e5e5e5",
      700: "#dfdfdf",
      800: "#d8d8d8",
      900: "#808080",
    },
    lam: {
      100: "#20a785",
      200: "#20a785",
      300: "#32E8BA",
      400: "#32E8BA",
      500: "#20a785",
      600: "#1a8066",
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
    disableTransitionOnChange: false
  }
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
