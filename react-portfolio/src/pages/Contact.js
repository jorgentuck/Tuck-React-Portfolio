import React from 'react';
import { Container, Row, Col, H1, Hr } from '../components/Layout';
// import Jumbotron from '../components/Hero';
import ContactMe from '../components/ContactMe';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col size='sm-12 md-10 lg-8'>
                    {/* <Jumbotron> */}
                        <H1>Contact</H1>
                        <Hr />
                        <Container>
                            <Row>
                                <ContactMe />
                            </Row>
                        </Container>
                    {/* </Jumbotron> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
