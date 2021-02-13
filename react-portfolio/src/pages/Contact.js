import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import ContactMe from '../components/ContactMe';

const Contact = () => {
    return (
        <Col sm={12} md={10} lg={8}>
            <Jumbotron>
                <H1>Contact</H1>
                <Hr />
                <Container>
                    <Row>
                        <ContactMe />
                    </Row>
                </Container>
            </Jumbotron>
        </Col>
    )
}

export default Contact;
