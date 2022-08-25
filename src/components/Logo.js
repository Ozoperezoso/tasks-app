import React from 'react';
import '../stylesheets/Logo.css'
import santa from '../images/santa.png';

function Logo () {
    return(
        <div className='app-logo-container'>
            <img 
                className='santa-logo'
                src={santa}
                alt='santa-logo' />
        </div>
    );
};
export default Logo;
