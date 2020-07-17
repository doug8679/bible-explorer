import React from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../../redux/book/book.actions';

import './book-list.styles.scss';

class BookList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }

    render() {
        const { error, loading, books } = this.props;

        if (error) {
            return <div className="error">Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {books.map(book =>
                    <li key={book.id}>{book.name}</li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books.items,
    loading: state.books.loading,
    error: state.books.error
});

export default connect(mapStateToProps)(BookList);