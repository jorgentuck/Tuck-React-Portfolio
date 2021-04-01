import React from 'react';
import { Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import ContactMe from '../components/ContactMe';

function Contact() {
    return (
        <Col sm={12} md={10} lg={8}>
            <Jumbotron>
                <H1>Contact</H1>
                <Hr />
                <ContactMe />
            </Jumbotron>
        </Col>
    )
}

export default Contact;
