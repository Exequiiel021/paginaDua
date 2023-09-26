import React from 'react'

export default function Boletos() {
  return (
    <section className='boletos bg-verde'>
        <h3>Boletos</h3>

        <div className='contenedor contenedor-boletos'>
            <div className='basico pase'>
                <p className='nombre-pase'>Pase 1 día</p>

                <header className='pase-header'>
                    <p>Incluye</p>
                </header>

                <div className='pase-body'>
                    <ul>
                        <li>
                            Acceso ambos escenarios
                        </li>
                        <li>
                            Comida y Bebidas
                        </li>
                    </ul>

                </div>

                <footer className='pase-footer'>
                    <p>$100</p>
                </footer>
            </div>

            <div className='premium pase'>
                <p className='nombre-pase'>Pase 2 días</p>

                <header className='pase-header'>
                    <p>Incluye</p>
                </header>

                <div className='pase-body'>
                    <ul>
                        <li>
                            Acceso ambos escenarios
                        </li>
                        <li>
                            Comida y Bebidas
                        </li>
                        <li>
                            Camisa del Evento
                        </li>
                        <li>
                            Acceso Vip
                        </li>
                    </ul>

                </div>

                <footer className='pase-footer'>
                    <p>$250</p>
                </footer>
            </div>
        </div>
    </section>
  )
}
