import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Rendering the App into the root element
const root = ReactDOM.createRoot(document.getElementById('root')); // Only call createRoot once
root.render(
  <StrictMode>
    <App /> 
  </StrictMode>
);