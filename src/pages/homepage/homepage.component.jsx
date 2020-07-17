import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import Book from '../../components/Book/book.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],  
        };
    }

    componentDidMount() {
        fetch('https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'api-key': 'd2701aef2b0330f0c086431c7d1afc82'
            }
        }).then(response => response.json())
          .then(data => this.setState({ books: data.data }));
    }

    render() {
        const { books } = this.state;
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1 className='header'>Welcome To React-Bootstrap</h1>
                </Jumbotron>
                <Row>
                    { books.map(book => <Book key={book.id} book={book} />) }
                </Row>
            </Container>
        );
    }
};

export default HomePage;