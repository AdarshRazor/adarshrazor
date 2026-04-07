import '../styles/Home.css'
import Avatar from '../static/photos/avatar.jpg'
import Avatar1 from '../static/photos/avatar1.jpg'
import Avatar2 from '../static/photos/avatar2.jpg'
import a1 from '../static/a1.gif'
import { Container, Row, Col, Image, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactTyped} from 'react-typed';
import Skills from '../skills'
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`
import projectData from '../static/JSON/homepage.json'
import { useEffect } from 'react';

const Home = () => {

    const [show, setShow] = useState(false);
    const [alertshow, setalertShow] = useState(true);
    const [colorChangedflag1, setColorChangedflag1] = useState(false);

    const [clicks, setClicks] = useState(0)
    const handleClick = (event) => {
        setClicks(clicks + 1);
        const {target} = event;
        if (clicks === 6) {
            target.style.color = 'lightcoral'; // Change to your desired color
            setShow(true)
            setColorChangedflag1(true);
        }
      };
      useEffect(() => {
        // Set a timer to hide the alert after 5 seconds
        const timer = setTimeout(() => {
            setalertShow(false);
        }, 5500);

        // Clear the timer if the component unmounts or if the effect is cleaned up
        return () => clearTimeout(timer);
    }, []);

    //   useEffect(() => {
    //     if (colorChangedflag1) {
    //       alert('Hurray! There are more hidden things for the truly observant.');
    //     }
    //   }, [colorChangedflag1]);

    const projects = projectData['homepage-project'];

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);


    return (
        <>
            <Container className='home-container'>
                <Row className='align-items-center home-row'>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                opacity: 0,
                            },
                            fpsLimit: 520,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 150,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: ["#0000FF","#008000","#FF0000"],
                                },
                                links: {
                                    color: "#000000",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.3,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 3 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                    <Col md={6} className='image-section'>
                        <Image src={Avatar} alt="Adarsh Anand Image" className="Hero-Image" roundedCircle fluid />
                    </Col>
                    <Col md={6} className='text-section'>
                        <p className='name-tag'>Hi, Adarsh here !</p>
                        <p>
                            I am a<ReactTyped className="sub-name-tag" strings={["‎ coder 📜","‎ developer 🖥️","‎ techie 🤖","‎ content-creator 🎥","n artist 👨‍🎨"]} typeSpeed={80} backSpeed={40} loop/>
                        </p>
                    </Col>
                </Row>
                <Row className='align-items-center home-row-bio'>
                    <p className='text-section-bio'>
                        <span className='home-row-bio-capitalized'>I</span> am a <a href="https://en.wikipedia.org/wiki/hacker" target="_black" rel="noopener noreferrer">hacker⁽⁺⁾</a> 👋🏻. Deeply curious about technology and social-engineering, I graduated from <a href="https://www.reva.edu.in/" target="_blank" rel="noopener noreferrer">Reva University⁽⁺⁾</a> as an Engineer with a Bachelor's in computer science.
                        <br /><br />
                        I started developing websites at an early age for various startups, became a webmaster for various universities, IEEE, and IISc Bangalore events, and also wrote a research paper on <a href="http://www.testmagzine.biz/index.php/testmagzine/article/view/8343/6317" target='_blank' rel="noopener noreferrer">Virtual Assistants based on User Preferences⁽⁺⁾</a>
                        <br /><br />
                        I started my <i>career</i> as a frontend developer, but the latter of my curiosities learned about cloud technologies. Currently, I am seeking job opportunities as a full-stack developer.
                        <br /><br />
                        When I am not in front of the screen, I probably go to put my life on track and be the best version. I like cafes, music, wanderlust and creative. I will be sharing what I experienced <Link to="/nontech">here</Link>
                        <br /><br />
                        Stay in touch! ✨<br /><br />
                    </p>
                </Row>
            </Container>
            {alertshow && (<div className="fixed-alert">
              <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <p>
                    Please visit to my new website: <a href="https://adarshere.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a> Stay tuned for the updates.
                </p>
            </Alert>
            </div>)}

            <Container className='mb-5'>
                <Row className='justify-content-center text-center'>
                    <Col md={4} className='d-flex justify-content-center'>
                        <div>
                            <span style={{fontSize: '5rem', fontWeight: 'bold', color: '#153448'}}>8</span>
                            <br />
                            <span style={{fontSize: '1.5rem'}}>projects completed</span>
                        </div>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center'>
                        <div>
                            <span style={{fontSize: '5rem', fontWeight: 'bold', color: '#0A6847'}}>1500+</span>
                            <br />
                            <span style={{fontSize: '1.5rem', color: '#0A6847'}}>open source commits</span>
                        </div>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center'>
                        <div>
                            <span style={{fontSize: '5rem', fontWeight: 'bold', color: '#153448'}}>5</span><span style={{color: '#153448'}}>yrs</span>
                            <br />
                            <span style={{fontSize: '1.5rem'}}>total experience</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='home-container mt-5'>
            <h1 className='text-center mt-5' style={{fontWeight: 'bold'}}><hr/>I perform <span style={{fontStyle: 'italic', fontWeight: '100'}}>symphonies</span> with my <span style={{color: 'blue'}}>keyboard</span>,<br/>turning the world into my <span style={{color: '#41B06E'}}>stage</span> and its people into my <span style={{color: 'red'}}>audience</span>.</h1>
            <hr className='mb-5'/>
                <Row className='align-items-center home-row mt-5'>
                    <Col md={6} className='text-section'>
                        <Skills/> {/* This is the skills components */}
                    </Col>
                    <Col md={6} className='image-section'>
                        <Row>
                            <Col md={10}>
                                <Image src={Avatar1} alt="Adarsh Anand Image" style={{height: "350px", width: "370px"}} className="skills-box1" roundedCircle fluid />
                            </Col>
                            <Col md={2}>
                                <Image src={Avatar2} alt="Adarsh Anand Image" style={{height: "auto", width: "100%"}} className="skills-box3" roundedCircle fluid />
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <Image src={a1} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}} className="skills-box2" roundedCircle fluid />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className='align-items-center showcase mb-5'>
            <h1 className='text-center my-5' style={{fontSize: '3rem', fontWeight: 'bold'}}>Volunteer Experience</h1>
            <Row className='justify-content-center'>
                {projects.map((project, index) => (
                    <Col key={index} md={3} className='d-flex justify-content-center mb-4 mx-5'>
                        <Card className='text-center grayscale' style={{ width: '25rem', border: 'none'}}>
                            <Card.Img variant="top" src={project.img}/>
                            <Card.Body>
                                <Card.Title style={{fontWeight: 600}}>{project.title.split('\n').map((line, lineIndex) => (
                                            <p key={lineIndex} style={{ margin: 0 }}>{line}</p>
                                        ))}</Card.Title>
                                <Card.Text className='text-muted'>{project.desc}</Card.Text>
                                {(project.link && <Button href={project.link} target="_blank">Checkout 🚀</Button>)}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
            <Container>
            <h4 className='text-center mt-5'><hr/>I may have hidden a few digital easter eggs for the curious clicker. <span id="changeme"style={{fontWeight: 'bold', cursor: 'default'}} onClick={handleClick} >Happy hunting!</span> 🎉 </h4>
            <hr className='mb-5'/>
            {/* <h1 className='text-center mt-5' style={{fontWeight: 'bold'}}><hr/>Can you navigate the website's hidden pathways? There's more than meets the eye for the truly observant.</h1>
            <hr className='mb-5'/>
            <h1 className='text-center mt-5' style={{fontWeight: 'bold'}}><hr/>Think you're a web sleuth? There are hidden gems scattered throughout the site, just waiting to be unearthed.</h1>
            <hr className='mb-5'/> */}
            {colorChangedflag1 && (
            <div>
              <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Hurray! 🐣 You found an Easter egg!</Alert.Heading>
                <p>
                There are more hidden things for the truly observant.
                </p>
            </Alert>
            </div>
          )}
            </Container>
        </>
    );
}

export default Home;
