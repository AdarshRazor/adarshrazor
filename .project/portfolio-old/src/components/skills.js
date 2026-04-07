import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import html from './static/skills/html.png'
import css from './static/skills/css.png'
import js from './static/skills/js.png'
import react from './static/skills/react.png'
import node from './static/skills/node.png'
import express from './static/skills/express.png'
import mongo from './static/skills/mongo.png'
import sql from './static/skills/sql.png'
import python from './static/skills/python.png'
import git from './static/skills/git.png'
import code from './static/skills/code.png'
import azure from './static/skills/azure.png'
import b from './static/skills/b.png'
import './styles/Home.css'

function skills() {
  return (
    <Container>
    <Row>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box1'><Image src={html} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box2'><Image src={css} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box3'><Image src={js} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>

        <Col md={2} className='my-3 skills-box4'><Image src={react} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box1'><Image src={node} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box2'><Image src={code} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>

        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box3'><Image src={express} alt="Adarsh Anand Image" style={{height: "50px", width: "70px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>                
        <Col md={2} className='my-3 skills-box4'><Image src={mongo} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box1'><Image src={sql} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>

        <Col md={2} className='my-3 skills-box2'><Image src={git} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box3'><Image src={python} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3 skills-box3'><Image src={azure} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>
        <Col md={2} className='my-3'><Image src={b} alt="Adarsh Anand Image" style={{height: "50px", width: "50px"}}/></Col>

    </Row>
    </Container>
  )
}

export default skills