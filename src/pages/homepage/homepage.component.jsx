import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import BibleList from '../../components/bible-list/bible-list.component';

import './homepage.styles.scss';

const HomePage= () => (
    <Container className="p-3">
        <Jumbotron>
            <h1 className='header'>Please select a Bible version to explore:</h1>
        </Jumbotron>
        <BibleList />
    </Container>
);

export default HomePage;