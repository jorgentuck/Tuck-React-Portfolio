import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutMe from '../components/AboutMe';

const About = () => {
    return (
        <Container fluid>
            <Row className="justify-content-md-center mt-5">
                <Col xs lg={10}>
                <AboutMe />
                </Col>
            </Row>
        </Container>
    )
}

export default About;