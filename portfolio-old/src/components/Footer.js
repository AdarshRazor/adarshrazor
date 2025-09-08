import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles/Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    useEffect(() => {
    console.log('🚀 Bhashini Translation Plugin: Initialization started...');

    try {
        // Prevent duplicate injection
        const existingScript = document.querySelector('script[src*="bhashini.co.in"]');
        if (existingScript) {
            console.log('⚠️ Bhashini Plugin: Script already loaded, skipping...');
            return;
        }

        const script = document.createElement("script");
        script.src = "https://translation-plugin.bhashini.co.in/v3/website_translation_utility.js";
        script.async = true;

        // Success handler
        script.onload = () => {
            console.log('✅ Bhashini Plugin loaded successfully');
            if (window.Bhashini) {
                console.log('🔧 Bhashini API object available:', window.Bhashini);
            } else {
                console.log('⏳ Bhashini API not yet available, may load asynchronously');
            }
        };

        // Error handler (prevents "Script error" crash)
        script.onerror = (error) => {
            console.error('❌ Failed to load Bhashini Plugin:', error);
        };

        // Append script
        document.body.appendChild(script);
        console.log('📦 Script injection completed');

        // Global window error handler (catches external script runtime errors)
        window.addEventListener("error", (event) => {
            if (event.filename && event.filename.includes("bhashini.co.in")) {
                console.error("💥 Bhashini Plugin runtime error:", event.message);
                event.preventDefault(); // stops React crash
            }
        });

    } catch (err) {
        console.error("💥 Critical error while setting up plugin:", err);
    }

    return () => {
        const scriptToRemove = document.querySelector('script[src*="bhashini.co.in"]');
        if (scriptToRemove) {
            document.body.removeChild(scriptToRemove);
            console.log("🧹 Bhashini Plugin script removed on unmount");
        }
    };
   }, []);


    return (
        <Container fluid className="footer-container mb-3">
            <Row className="justify-content-center">
                <p>Find me on:</p>
            </Row>
            <Row className="justify-content-center social-row mt-2">
                <Col md={3} xs={6} className="social-column">
                    <FaEnvelope className="social-icon" />
                    <a href="mailto:adarshanshu7@gmail.com" target="_blank" rel="noreferrer">
                        {" "}Adarsh Anand
                    </a>
                </Col>
                <Col md={3} xs={6} className="social-column">
                    <FaGithub className="social-icon" />
                    <a href="https://github.com/AdarshRazor" target="_blank" rel="noreferrer">
                        {" "}AdarshRazor
                    </a>
                </Col>
                <Col md={3} xs={6} className="social-column">
                    <FaYoutube className="social-icon" />
                    <a href="https://www.youtube.com/@RazorCloak" target="_blank" rel="noreferrer">
                        {" "}RazorCloak
                    </a>
                </Col>
                <Col md={3} xs={6} className="social-column">
                    <FaLinkedin className="social-icon" />
                    <a href="https://www.linkedin.com/in/adarsh007/" target="_blank" rel="noreferrer">
                        {" "}adarsh007
                    </a>
                </Col>
            </Row>

            {/* 🔹 Bhashini Plugin Container */}
            <Row className="justify-content-center mt-3">
            </Row>
        </Container>
    );
};

export default Footer;