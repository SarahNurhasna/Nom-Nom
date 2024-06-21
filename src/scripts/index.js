/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register.js';
import App from './views/app.js';
import './component/hero.js';
import './component/appBar.js';
import './component/footerBar.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
