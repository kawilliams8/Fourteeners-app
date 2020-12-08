import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './src/components/App/App.js';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(router,
document.getElementById('root')
)
