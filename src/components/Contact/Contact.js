
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <h2 className='text-center mt-4 fw-bold text-decoration-underline'>Get In Touch</h2>
            <Container className='justify-content-center'>
            <Row>
            <Col xs={12} md={5}>
            <div className='mt-5 text-start'>
                <h4>DON'T BE SHY!!</h4>
                <p className='my-4'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <Row>
                <Col xs={6} md={2}>
                <i class="fas fa-home icon"></i>
                </Col>
                <Col xs={6} md={10}>
                <h5>Address</h5>
                <p>35/H Azimpur Government Quarter, Dhaka-1205</p>
                </Col>
                </Row>
                <Row>
                <Col xs={6} md={2}>
                <i class="fas fa-envelope icon"></i>
                </Col>
                <Col xs={6} md={10}>
                <h5>Mail Me</h5>
                <p>nushratuddin.nu@gmail.com</p>
                </Col>
                </Row>
                <Row>
                <Col xs={6} md={2}>
                <i class="fas fa-phone-square-alt icon"></i>
                </Col>
                <Col xs={6} md={10}>
                <h5>Call Me</h5>
                <p>01556218723</p>
                </Col>
                </Row>
            </div>
            </Col>
            <Col xs={12} md={7}>
            <Form className='mt-5 text-start'>
            <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" size="lg" active>
                Submit
            </Button>{' '}
            </Form>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Contact;