import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const uri = 'http://localhost:3000/adminpage';
root.render(
   <Auth0Provider
   domain="dev-eaq1fbwe8xhs640t.us.auth0.com"
   clientId="LuCmYJuXAmfGllDIzhXpge48MqN8wE7a"
   authorizationParams={{
     redirect_uri: window.location.origin
   //   redirect_uri: {uri}
  //  }}
   }}
  >
   <BrowserRouter>  <ChakraProvider>
      <App />
  </ChakraProvider></BrowserRouter>
  </Auth0Provider>

);

reportWebVitals();
