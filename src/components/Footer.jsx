import React from 'react'
import tidal from '../img/icons/deezer.png';
import spotify from '../img/icons/spotify.png';
import instagram from '../img/icons/instagram.png';
import twiter from '../img/icons/gorjeo.png';
import youtube from '../img/icons/youtube.png';
import facebook from '../img/icons/facebook.png';


export default function Footer() {
    return (
        <footer className='contenedor footer'>
            <div className='footer-contenedor'>
                <p>Todos los derechos reservados, Exequiel Godoy</p>

                <div className='enlace'>
                    <a href="https://www.instagram.com/dualipa/"> <img src={instagram} alt="foto-instagram" /></a>
                    <a href="https://twitter.com/DUALIPA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> <img src={twiter} alt="foto-wtiter" /></a>
                    <a href="https://www.facebook.com/DuaLipa/?locale=es_LA"> <img src={facebook} alt="foto-facebook" /></a>
                    <a href="https://www.youtube.com/channel/UC-J-KZfRV8c13fOCkhXdLiQ"> <img src={youtube} alt="foto-youtube" /></a>
                    <a href="https://tidal.com/browse/artist/7162333"> <img src={tidal} alt="foto-tidal" /></a>
                    <a href="https://open.spotify.com/intl-es/artist/6M2wZ9GZgrQXHCFfjv46we"> <img src={spotify} alt="foto-spotify" /></a>
                </div>

            </div>
        </footer>
    )
}
