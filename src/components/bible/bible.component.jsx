import React from 'react';

import Card from 'react-bootstrap/Card';

import './bible.styles.scss';

const Bible = ({ bible }) => (
    <Card key={bible.id}>
        <Card.Header as="h5">{bible.name}</Card.Header>
        <Card.Body>
            <Card.Text>{bible.description}</Card.Text>
        </Card.Body>
    </Card>
);

export default Bible;