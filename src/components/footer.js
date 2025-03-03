import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (<>
        <div className='footer-container'>
            <div className='footer-phone'>
                <FontAwesomeIcon icon={faPhone} />
            </div>
            <span className='footer-title'></span>
            <span className='footer-phone'></span>
            <span className='footer-email'></span>
            <span className='footer-telegram'></span>
        </div>
    </>);
}

export default Footer;