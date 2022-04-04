import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <>
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedinIn} />
       </>
    )
}

export default Footer;
