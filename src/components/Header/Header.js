import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
    <Container>
            
    <Row>
    <Col xs={12} md={6}>
    <img className='image' src='/images/Nushrat.png' alt=""/>
    </Col>
    <Col xs={12} md={6} className='mt-5 p-5'>
    <h1 className='mt-5 mb-4' >Hi, I'M <span className='name'> NUSHRAT UDDIN</span></h1>
    <h2 className='mb-5'>FRONT END DEVELOPER</h2>
    <Button variant="outline-primary" className='mx-3'>More About Me</Button>
    <a target='_blank'rel="noreferrer" href='https://drive.google.com/file/d/1YxWxZLUuTEFgXzOER2sJfn5Sdy_M4raZ/view?usp=sharing'><Button variant="outline-success">My Resume</Button></a>
    </Col>
        </Row>
        </Container>
    );
};

export default Header;