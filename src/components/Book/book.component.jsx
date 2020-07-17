import React from 'react';

import './book.styles.scss';

const Book = ({ book }) => (
    <div className="book">
        <div className="content">
            <h1 className="title">{book.name}</h1>
            <span className="description">{book.nameLong}</span>
        </div>
    </div>
);

export default Book;