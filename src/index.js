import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ThemeContext} from './hooks/UseContexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <ThemeContext>
    <App />
    </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);