import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">            
            <div className="footer-left">
                <a href="/terms">Termos</a>
                <a href="/privacy">Privacidade</a>
                <a href="/cookies">Cookies</a>
            </div>

            <div className="footer-right">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                    </i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                    </i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;