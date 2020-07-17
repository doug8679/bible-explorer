import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './header.styles.scss';
import { Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar bg='dark'>
        <Navbar.Brand>BRAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
                <Nav.Link>Test</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;