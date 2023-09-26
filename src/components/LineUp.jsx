import React from 'react'
import icon1 from '../img/hablar-caja.png';
import icon2 from '../img/ondas-sonoras.png';

export default function () {
    return (
        <section id='lineup' className='lineup'>
            <h3>Line Up</h3>
            <p className='dia'>Viernes 22</p>
            <div className='escenario-contenedor contenedor'>

                <div className='escenario pop bg-amarillo'>

                    <p className='nombre escenario'>Escenario POP</p>
                        
                        <div className='imagen'>
                            <img className='icon-pop' src={icon2} alt="foto" />
                        </div>
                        
                    <ul className='calendario'>
                        <li>
                            24:00 | <span>Madonna</span>
                        </li>
                        <li>
                            22:00 | <span>Dua Lipa</span>
                        </li>
                        <li>
                            20:00 | <span>Sia</span>
                        </li>
                        <li>
                            19:00 | <span>Adele</span>
                        </li>
                        <li>
                            18:00 | <span>Rita Ora</span>
                        </li>
                        <li>
                            17:00 | <span>Bruno Mars</span>
                        </li>
                    </ul>
                </div>

                <div className='escenario edm bg-verde'>
                    <p className='nombre escenario'>Escenario EDM</p>

                    <div className='imagen'>
                            <img className='icon-edm' src={icon1} alt="foto" />
                        </div>

                    <ul className='calendario'>
                        <li>
                            24:00 | <span>Inna</span>
                        </li>
                        <li>
                            22:00 | <span>Antonia</span>
                        </li>
                        <li>
                            20:00 | <span>David Guetta</span>
                        </li>
                        <li>
                            19:00 | <span>Alok</span>
                        </li>
                        <li>
                            18:00 | <span>Ricky Martin</span>
                        </li>
                        <li>
                            17:00 | <span>Chayanne</span>
                        </li>
                    </ul>
                </div>
            </div>

            <p className='dia'>Sabado 23</p>
            <div className='escenario-contenedor contenedor'>

                <div className='escenario pop bg-verde'>
                    <p className='nombre escenario'>Escenario POP</p>

                    <div className='imagen'>
                            <img className='icon-pop' src={icon2} alt="foto" />
                        </div>

                    <ul className='calendario'>
                    <li>
                            24:00 | <span>Inna</span>
                        </li>
                        <li>
                            22:00 | <span>Antonia</span>
                        </li>
                        <li>
                            20:00 | <span>David Guetta</span>
                        </li>
                        <li>
                            19:00 | <span>Alok</span>
                        </li>
                        <li>
                            18:00 | <span>Ricky Martin</span>
                        </li>
                        <li>
                            17:00 | <span>Chayanne</span>
                        </li>
                    </ul>
                </div>

                <div className='escenario edm bg-amarillo'>
                    <p className='nombre escenario'>Escenario EDM</p>

                    <div className='imagen'>
                            <img className='icon-edm' src={icon1} alt="foto" />
                        </div>
                    <ul className='calendario'>
                    <li>
                            24:00 | <span>Inna</span>
                        </li>
                        <li>
                            22:00 | <span>Antonia</span>
                        </li>
                        <li>
                            20:00 | <span>David Guetta</span>
                        </li>
                        <li>
                            19:00 | <span>Alok</span>
                        </li>
                        <li>
                            18:00 | <span>Ricky Martin</span>
                        </li>
                        <li>
                            17:00 | <span>Chayanne</span>
                        </li>
                    </ul>
                </div>
            </div>

            <section className='imagen'>

            </section>

        </section>

        
    )
}
