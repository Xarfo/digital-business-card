import React from 'react';
import Profile from '../assets/images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Hero() {
    return (
        <>
        <img src = {Profile} width="317px" height="317px"/>

        <div className="hero-text-container">
        <h4 className="title"> Software Engineer </h4>
        <h6 className="website"><a href = "https://www.abdulahmad.com">abdulahmad.com</a></h6>
        </div>

        <section className="hero-btn-container">
        <button className="email-btn"><FontAwesomeIcon icon="fa-solid fa-envelope" />&nbsp;Email</button>
        <button className="linkedin-btn"><FontAwesomeIcon icon="fab fa-linkedin-in" />&nbsp;LinkedIN</button>
        </section>

        </>
    )
}

export default Hero;