import React from 'react';
import { Card, Row, Col, Container, ButtonGroup, Button, Badge } from 'react-bootstrap';
import projects from '../static/JSON/Experience.json';
//import '../styles/Exp.css'   // Assuming you have a CSS file for styles

class Experience extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '35px' }}>
                {projects["projects"].map((project, index) => (
                    <Row key={index} style={{ marginBottom: '20px' }}>
                        <Col md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={project.image} alt={project.name} style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '10px' }}  />
                        </Col>
                        <Col md={8}>
                            <Card style={{ border: 'none', boxShadow: 'none' }}>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{project.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted project-subtitle" style={{fontWeight:'bold', fontStyle: 'italic' }}>
                                        {project.role}
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted project-subtitle">
                                        {project.date}
                                        <div>
                                            {project.badges && project.badges.map((badge, badgeIndex) => (
                                                <Badge key={badgeIndex} bg={badge.color} text={badge.text} className="mt-1 me-1">  {/*mt-1 and me-1 tag is used to provide small spanced*/}
                                                    {badge.tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </Card.Subtitle>
                                    <Card.Text className="project-description">
                                        {project.description.split('\n').map((line, lineIndex) => (
                                            <p key={lineIndex} style={{ margin: 0 }}>{line}</p>
                                        ))}
                                    </Card.Text>
                                    <ButtonGroup size="sm" aria-label="Controls" className="project-button-group">
                                        {project.appLink && (
                                            <Button variant="light" className="project-button" onClick={() => window.open(project.appLink, "_blank")}>App</Button>
                                        )}
                                        {project.codeLink && (
                                            <Button variant="light" className="project-button" onClick={() => window.open(project.codeLink, "_blank")}>Code</Button>
                                        )}
                                        {project.blogLink && (
                                            <Button variant="light" className="project-button" onClick={() => window.open(project.blogLink, "_blank")}>Read More</Button>
                                        )}
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
        );
    }
}

export default Experience;
