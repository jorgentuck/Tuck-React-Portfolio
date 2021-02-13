import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import AboutMe from '../components/AboutMe';

const About = () => {
    return (
        <Col xs lg={10}>
            <Jumbotron>
                <H1>About Me</H1>
                <Hr />
                <AboutMe />
            </Jumbotron>
        </Col>
    )
}

export default About;