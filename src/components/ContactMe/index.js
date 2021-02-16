import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
  };

export default function ContactMe() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = e => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...formState })
        })
          .then(() => alert('Success!'))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='contactMeForm'>
                            <Row className='mb-3'>
                                <Form.Control
                                type='text'
                                placeholder='Name'
                                name='name'
                                onChange={(e) => setFormState({ ...formState, name:e.target.value})}
                                />
                            </Row>
                            <Row className='mb-3'>
                                <Form.Control
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={(e) => setFormState({ ...formState, email:e.target.value})}
                                />
                            </Row>
                            <Row className='mb-3'>
                                <Form.Control
                                as='textarea'
                                placeholder='Message'
                                name='message'
                                rows={3}
                                onChange={(e) => setFormState({ ...formState, message:e.target.value})}
                                />
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
