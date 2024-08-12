import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle=createGlobalStyle`
*{
box-sizing:border-box;
margin:0px;
padding:0px;

}
body{
  font-family: "Edu AU VIC WA NT Hand", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
background-color:#323334;
color:white;
min-height:100vh;
font-family: "Inter",sans-serif;
}



`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
