import React from 'react';
import { createRoot } from 'react-dom/client';
import {Toaster} from "react-hot-toast";
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>
);