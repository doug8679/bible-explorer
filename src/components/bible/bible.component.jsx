import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import './bible.styles.scss';

const Bible = ({ bible, history, match }) => (
    <Card key={bible.id} onClick={() => history.push(`${match.url}/bibles/${bible.bibleid}`)}>
        <Card.Header as="h5">{bible.name}</Card.Header>
        <Card.Body>
            <Card.Text>{bible.description}</Card.Text>
        </Card.Body>
    </Card>
);

export default withRouter(Bible);