import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import InicioSesion from './components/InicioSesion'
import Registro from './components/Registro';

ReactDOM.render(
  <React.StrictMode>
    <InicioSesion />
  </React.StrictMode>,
  document.getElementById('root')
);

