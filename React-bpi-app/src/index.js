import React from 'react';
import { render } from 'react-dom';

import './App.css';
import ButtonLayer1 from './components/ButtonLayer1';
import ButtonLayer2 from './components/ButtonLayer2';
import ButtonLayer3 from './components/ButtonLayer3';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuText1 from './components/MenuText1';
import MenuText2 from './components/MenuText2';
import MenuText3 from './components/MenuText3';



const App = () => (
  <div>
    <Header/>
    <div className="w3-container footer-padding">
      <ButtonLayer1 />
      <MenuText1 />
      <ButtonLayer2 />
      <MenuText2 />
      <ButtonLayer3 />
      <MenuText3 />
    </div>
    <Footer />
  </div>
);

render(<App />, document.getElementById('root'));
