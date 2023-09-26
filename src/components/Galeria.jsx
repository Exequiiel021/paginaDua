import React, { useEffect } from 'react';

import imagen1 from '../img/thumb/1.jpg';
import imagen2 from '../img/thumb/2.jpg';
import imagen3 from '../img/thumb/3.jpg';
import imagen4 from '../img/thumb/4.jpg';
import imagen5 from '../img/thumb/5.jpg';
import imagen6 from '../img/thumb/6.jpg';
import imagen7 from '../img/thumb/7.jpg';
import imagen8 from '../img/thumb/8.jpg';
import imagen9 from '../img/thumb/9.jpg';
import imagen10 from '../img/thumb/10.jpg';
import imagen11 from '../img/thumb/11.jpg';
import imagen12 from '../img/thumb/12.jpg';

import dua1 from '../img/fotos/1.jpg';
import dua2 from '../img/fotos/2.jpg';
import dua3 from '../img/fotos/3.jpg';
import dua4 from '../img/fotos/4.jpg';
import dua5 from '../img/fotos/5.jpg';
import dua6 from '../img/fotos/6.jpg';
import dua7 from '../img/fotos/7.jpg';
import dua8 from '../img/fotos/8.jpg';
import dua9 from '../img/fotos/9.jpg';
import dua10 from '../img/fotos/10.jpg';
import dua11 from '../img/fotos/11.jpg';
import dua12 from '../img/fotos/12.jpg';

export default function Galeria() {
  const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12];
  const grande = [dua1,dua2,dua3,dua4,dua5,dua6,dua7,dua8,dua9,dua10,dua11,dua12];

  useEffect(() => {
    crearGaleria();
  }, []);

  function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const imagenesCreadas = galeria.querySelectorAll('picture');

    for (let i = imagenesCreadas.length; i < imagenes.length && i < 12; i++) {
      const imagen = document.createElement('picture');
      imagen.innerHTML = `<img loading="lazy" width="200" height="150" src="${imagenes[i]}" alt="imagen galeria">`;

      imagen.onclick = function () {
        mostrarImagen(i);
      }

      galeria.appendChild(imagen);
    }
  }

  function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `<img loading="lazy" src="${grande[id]}" alt="imagen galeria">`;
  
    //crea el overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function () {
        const body = document.querySelector('body'); //42 43 para volver habilitar el scroll cuando se cierra una foto
        body.classList.remove("fijar-body");
        overlay.remove();
    };

    //boton para cerrar el modal
    const cerrarModal = document.createElement("P");
    cerrarModal.textContent = "";
    cerrarModal.classList.add("btn-cerrar");

    cerrarModal.onclick = function () {
        const body = document.querySelector('body'); //42 43 para volver habilitar el scroll cuando se cierra una foto
        body.classList.remove("fijar-body");
        overlay.remove();
    };

    overlay.appendChild(cerrarModal);

    //añadirlo a la imagen
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add("fijar-body");
  }
  

  return (
    <section id='galeria' className='contenedor galeria'>
      <h3>Galería</h3>
      <ul className='galeria-imagenes'></ul>
    </section>
  );
}










