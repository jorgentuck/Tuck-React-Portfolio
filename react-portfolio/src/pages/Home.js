import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';



const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Hero />
            </Row>
        </Container>
    )
};

export default Home;
