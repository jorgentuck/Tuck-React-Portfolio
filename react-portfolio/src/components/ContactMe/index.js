import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function ContactMe() {
    return (
        <Container fluid>
            <Row>
                <h5>
                    Phone: <a
                        href='tel:385-268-9040'
                    >(385) 268-9040</a>
                </h5>
            </Row>
            <Row>
                <h5>
                    Email: <a
                        href='mailto:Jorgen@JorgenTuck.com'
                    >Jorgen@JorgenTuck.com</a>
                </h5>
            </Row>
            <Row>
                <h5>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/james-jorgen-tuck'
                        rel='noreferrer'
                    >LinkedIn</a>
                </h5>
            </Row>
            <Row>
                <h5>
                    <a
                        target='_blank'
                        href='https://github.com/jamesjtuckbc'
                        rel='noreferrer'
                    >GitHub</a>
                </h5>
            </Row>
            <Row>
                <p>Or fill out the form below!</p>
            </Row>
            <Row>
                <Col xs={8}>
                    <Form method='POST' data-netlify='true' >
                        <Form.Group controlId='contactMeForm'>
                            <Row className='mb-3'>
                                <Form.Control type='text' placeholder='Name' />
                            </Row>
                            <Row className='mb-3'>
                                <Form.Control type='email' placeholder='Email' />
                            </Row>
                            <Row className='mb-3'>
                                <Form.Control as='textarea' placeholder='Message' rows={3} />
                            </Row>
                            <Button
                                variant='dark' type='submit'
                                className='ml-n2'
                                >Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
