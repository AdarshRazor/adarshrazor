import '../styles/Saket.css'
import Avatar from '../static/photos/saket.jpg'
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import {ReactTyped} from 'react-typed';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    const [show, setShow] = useState(false);
    const [alertshow, setalertShow] = useState(true);

      useEffect(() => {
        // Set a timer to hide the alert after 5 seconds
        const timer = setTimeout(() => {
            setalertShow(false);
        }, 3500);

        // Clear the timer if the component unmounts or if the effect is cleaned up
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Container className='home-container'>
                <Row className='align-items-center home-row'>
                    <Col md={6} className='image-section'>
                        <Image src={Avatar} alt="Adarsh Anand Image" className="Hero-Image" roundedCircle fluid />
                    </Col>
                    <Col md={6} className='text-section'>
                        <p className='name-tag'>Happy Birthday! 🎉</p>
                        <p>
                            <ReactTyped className="sub-name-tag" strings={["‎ Saket","‎ Shakil","‎ Chotu","‎ Developer","‎ Hentai-Lover 👨‍🎨"]} typeSpeed={80} backSpeed={40} loop/>
                        </p>
                    </Col>
                </Row>
                <Row className='align-items-center home-row-bio'>
                    <p className='text-section-bio'>
                        <span className='home-row-bio-capitalized'>Happy Birthday Bhai ! </span> somehow I convinced you 7 years ago that we will be "cool" enough to be friends. Seriously, what were you thinking back then 😂? But I am glad I found you in very unexpected way. 
                        <br /><br />
                        Abhi this project is really hitting hard as I am overiding my sleep 😂. It's almost as shocking as the fact that I was missing being there, and then bam! This project came up, which totally reminded me of those awesome college hackathons, you know, when we first did one with Kanishk and Yusuf? Glad the universe has its own weird plans! 😝. 
                        <br /><br />
                        I really, really miss you and hanging out with you. I was super upset last few days kyuki I planned but nahi aa paye Bday surprise dene. Lots of things happened and kaafi stories h batane ke liye. For now - Party Hard and Drink a lot 🥂. <span>Best Wishes to you Brother - You deserve the best.</span>
                        <br /><br />
                    </p>
                </Row>
            </Container>
            {alertshow && (<div className="fixed-alert">
              <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <p>
                    Happy Birthday! 🎉
                </p>
            </Alert>
            </div>)}
        </>
    );
}

export default Home;
