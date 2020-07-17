import React from 'react';

import Card from 'react-bootstrap/Card'

import './book.styles.scss';

const Book = ({ book }) => (
    <Card>
        <Card.Header as="h5">{book.name}</Card.Header>
        <Card.Body>
            <Card.Text>{book.nameLong}</Card.Text>
        </Card.Body>
    </Card>
);

export default Book;