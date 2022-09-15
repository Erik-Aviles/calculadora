import React from "react";
import freeCodeCampLogo from '../assets/image/freecodecamp-logo.png'
import '../styles/Logo.css'

export function Logo() {
   return (
    <div className='freecodecamp-logo-contenedor'> 
       <img
            src={freeCodeCampLogo}
            className='freecodecamp-logo'
            alt='logo de freeCodeCamp'
        />
    </div>
   );
}