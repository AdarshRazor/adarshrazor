import React from 'react';
import { Card, Row, Col, Container, ButtonGroup, Button } from 'react-bootstrap';
import projects from '../static/JSON/Projects.json';

class Projects extends React.Component {
    render() {
        return (
            <>
            <Container style={{ marginTop: '35px' }}>
                {projects["projects"].map((project) => {
                    return (
                        <Row key={project.name} style={{ marginBottom: '20px' }}>
                            <Col md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* Use the dynamically required image source */}
                                <img src={project.image} alt={project.name} style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '10px' }} />
                            </Col>
                            <Col md={8}>
                                <Card style={{ border: 'none', boxShadow: 'none' }}>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{project.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{project.date}</Card.Subtitle>
                                        <Card.Text style={{ fontSize: '1rem' }}>
                                            {project.description}
                                        </Card.Text>
                                        <ButtonGroup size="sm" aria-label="Controls" style={{ marginTop: '10px' }}>
                                            {project.appLink && (
                                                <Button variant="light" style={{ margin: '0 5px' }} onClick={() => window.open(project.appLink, "_blank")}>App</Button>
                                            )}
                                            {project.codeLink && (
                                                <Button variant="light" style={{ margin: '0 5px' }} onClick={() => window.open(project.codeLink, "_blank")}>Code</Button>
                                            )}
                                            {project.blogLink && (
                                                <Button variant="light" style={{ margin: '0 5px' }} onClick={() => window.open(project.blogLink, "_blank")}>Read More</Button>
                                            )}
                                        </ButtonGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
            <h1 className='my-5 d-flex align-items-center justify-content-center'>Portable Projects</h1>
            <Container className='align-items-center showcase mb-5 '>
                <Row className='justify-content-center'>
                {projects["small-projects"].map((project) => {
                    return (
                        <Col key={project.name} md={3} className='d-flex justify-content-center mb-4 mx-5'>
                            <Card className='text-center' style={{ width: '25rem', border: 'none'}}>
                                <Card.Img variant="top" src={project.image} style={{width: '100%', height: '100%', borderRadius: '200px' }} />
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 600}}>{project.name.split('\n').map((line, lineIndex) => (
                                                <p key={lineIndex} style={{ margin: 0 }}>{line}</p>
                                            ))}</Card.Title>
                                    {project.appLink && (
                                                <Button variant="light" style={{ margin: '0 5px' }} onClick={() => window.open(project.appLink, "_blank")}>App</Button>
                                            )}
                                    {project.codeLink && (
                                        <Button variant="light" style={{ margin: '0 5px' }} onClick={() => window.open(project.codeLink, "_blank")}>Code</Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
                </Row>
                </Container>
        </>
        );
    }
}

export default Projects;
