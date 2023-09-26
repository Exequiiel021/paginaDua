import React from 'react'
import video from '../../video/Mivideo-1.mp4';

export default function() {
    return (
        <div className='video'>
            <div className='overlay'>
                <div className='contenedor contenido-video'>
                    <h2>Pop & EDM Festival</h2>
                    <p>Septiembre 2023, San Luis-Argentina</p>
                </div>
            </div>
            <video autoPlay muted loop>
                <source src={video} type='video/mp4' />
            </video>
        </div>
    )
}
