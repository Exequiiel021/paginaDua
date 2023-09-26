import { useState } from 'react';
import Header from './components/Header';
import Video from './components/Video';
import SeccionFestival from './components/SeccionFestival';
import LineUp from './components/LineUp';
import Galeria from './components/Galeria';
import Boletos from './components/Boletos';
import Footer from './components/Footer';

function App() {

  scrollNav();
  
  function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}


  return (
    <>
      <Header />
      <Video />
      <SeccionFestival />
      <LineUp />
      <Galeria />
      <Boletos />
      <Footer />
    </>
  )
}

export default App
