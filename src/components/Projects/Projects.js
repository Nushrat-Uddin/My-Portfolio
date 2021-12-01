import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <h2 className='text-center mt-5 p-2 heading'>My Projects</h2>
            <Row xs={1} md={3} lg={3} xl={4} className="g-4 justify-content-center mt-4 mb-5 box">
            <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
            <Card.Img  src="/images/travel-website2.png" className='imagecard' />
            <Card.Body>
            <Card.Title>TRAVEL.com</Card.Title>
            <Card.Text>
            Created a tourism-related full stack website using react js, react-router, react-bootstrap, firebase, node, express, mongodb.
            </Card.Text>
            <a target='_blank'rel="noreferrer"  href='https://travel-agency-463b9.web.app/'><Button className='button' variant="primary">See Website</Button></a>
            </Card.Body>
            </Card>   
            </Col>
            <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/city-hospital2.png"className='imagecard' />
            <Card.Body>
            <Card.Title>City Hospital</Card.Title>
            <Card.Text>
            Implemented a fully responsive healthcare-related website. Used firebase for authentication of the system. 
            </Card.Text>
            <a target='_blank'rel="noreferrer" href='https://youthful-snyder-683c38.netlify.app/home'><Button className='button' variant="primary">See Website</Button></a>
            </Card.Body>
            </Card>   
            </Col>
            <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="/images/watch2.png"className='imagecard' />
            <Card.Body>
            <Card.Title>IRISH-watch shop</Card.Title>
            <Card.Text>
            Responsive MERN stack website.Used material UI for design. Data has been hosted on the database.
            </Card.Text>
            <a target='_blank'rel="noreferrer" href='https://watch-shop-8f4aa.web.app/home'><Button className='button' variant="primary">See Website</Button></a>
            </Card.Body>
            </Card>   
            </Col>
            </Row>
    
        </div>
    );
};

export default Projects;