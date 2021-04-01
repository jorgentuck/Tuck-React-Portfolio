import React from 'react';
import { Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import Jumbotron from '../components/Jumbotron';

function Error() {
    return (
        <Col sm={12} md={10} lg={8}>
            <Jumbotron>
                <H1>404</H1>
                <Hr />
                <H1>Uh Oh! Looks like you lost your way! Head back <a href='/'>Home</a>?</H1>
            </Jumbotron>
        </Col>
    )
}

export default Error;
