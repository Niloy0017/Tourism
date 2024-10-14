import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-body-tertiary bg-success" style={{backgroundColor: '#0a4275'}}>

            <div className="container-fluid p-4" style={{backgroundColor: '#0a4275'}}>
                <section >
                    <a
                        href="#!"
                        className="btn btn-link btn-floating btn-lg text-white m-1 "
                        role="button"
                        data-mdb-ripple-init
                        style={{backgroundColor: '#3b5998'}}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="#!"
                        className="btn btn-link btn-floating btn-lg text-white m-1 "
                        role="button"
                        data-mdb-ripple-init
                        style={{backgroundColor: '#55acee'}}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="#!"
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        role="button"
                        data-mdb-ripple-init
                        style={{backgroundColor: '#dd4b39'}}
                    >
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a
                        href="#!"
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        role="button"
                        data-mdb-ripple-init
                        style={{backgroundColor: '#ac2bac'}}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="#!"
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        role="button"
                        data-mdb-ripple-init
                        style={{backgroundColor: '#0082ca'}}
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                        href="#!"
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        role="button"
                        data-mdb-ripple-init
                        style={{backgroundColor: '#333333'}}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </section>
            </div>

            <div className="text-center text-white p-3" style={{ backgroundColor: '#002D62' }}>
                © 2024 Copyright : Bonoful.com
            </div>

        </footer>
    )
}

export default Footer;
