import React from 'react';
import { Nav } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <Nav className="justify-content-end mt-3 mx-5" activeKey="/home">
        <Nav.Item>
        <NavLink className='mx-4 link' to="/home">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className='mx-4 link' to="/about">About</NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className='mx-4 link' to="/portfolio" >Portfolio</NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className='mx-4 link' to="/contact" >Contact</NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className='mx-4 link' to="/blogs">Blogs</NavLink>
        </Nav.Item>
    </Nav>
    );
};

export default Navbar;