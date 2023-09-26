import React from 'react'
import dua from '../img/fotos/9.jpg';

export default function SeccionFestival() {
    return (
        <section className='contenedor sobre-festival'>
            <div className='imagen'>
                <img src={dua} alt="vocalista" />
            </div>

            <div className='contenido-festival'>
                <h2>Pop & EDM Festival</h2>
                <p className='fecha'>Septiembre 2023, San Luis-Argentina</p>
                <p>Dua Lipa (Westminster, Londres; 22 de agosto de 1995) es una cantante, compositora, modelo y actriz británica-albanesa. 
                    Después de trabajar como modelo, firmó con Warner Bros. Records en 2014 y lanzó su álbum debut homónimo en 2017. 
                    El álbum alcanzó el número 3 en la UK Albums Chart y lanzó ocho sencillos, incluidos «Be the One» e «IDGAF»,
                     y el sencillo número 1 del Reino Unido «New Rules», que también llegó al puesto número 6 en Estados Unidos.</p>
            </div>
        </section>
    )
}

