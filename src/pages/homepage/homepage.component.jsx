import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import BookList from '../../components/book-list/book-list.component';

import './homepage.styles.scss';

const HomePage= () => (
    <Container className="p-3">
        <Jumbotron>
            <h1 className='header'>Welcome To React-Bootstrap</h1>
        </Jumbotron>
        <BookList />
    </Container>
);

export default HomePage;