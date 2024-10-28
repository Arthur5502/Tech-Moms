import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            
            <div className="footer-left">
                <a href="/">Termos</a>
                <a href="/">Privacidade</a>
                <a href="/">Cookies</a>
            </div>

            <div className="footer-right">
                <a href="/" target="_blank" rel="">
                    <i className="fab fa-facebook">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </i>
                </a>
                <a href="/" target="_blank" rel="">
                    <i className="fab fa-twitter">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                    </i>
                </a>
                <a href="/" target="_blank" rel="">
                    <i className="fab fa-instagram">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                    </i>
                </a>
                <a href="/" target="_blank" rel="">
                    <i className="fab fa-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </i>
                </a>
            </div>

        </footer>
    );
}

export default Footer;