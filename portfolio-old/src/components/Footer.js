import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles/Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://translation-plugin.bhashini.co.in/v3/website_translation_utility.js";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function to remove script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container fluid className="footer-container mb-3">
            <Row className="justify-content-center">
                <p>Find me on:</p>
            </Row>
            <Row className="justify-content-center social-row mt-2">
                <Col md={3} xs={6} className="social-column">
                    <FaEnvelope className="social-icon" /><a href="mailto:adarshanshu7@gmail.com" target="_blank" rel="noreferrer"> Adarsh Anand</a>
                </Col>
                <Col md={3} xs={6} className="social-column">
                    <FaGithub className="social-icon" /><a href="https://github.com/AdarshRazor" target="_blank" rel="noreferrer"> AdarshRazor</a>
                </Col>
                <Col md={3} xs={6} className="social-column">
                    <FaYoutube className="social-icon" /><a href="https://www.youtube.com/@RazorCloak" target="_blank" rel="noreferrer"> RazorCloak</a>
                </Col>
                <Col md={3} xs={6} className="social-column">
                    <FaLinkedin className="social-icon" /><a href="https://www.linkedin.com/in/adarsh007/" target="_blank" rel="noreferrer"> adarsh007</a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
