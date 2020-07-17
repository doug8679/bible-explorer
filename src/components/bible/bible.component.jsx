import React from 'react';

import './bible.styles.scss';

const Bible = ({ bible }) => (
    <div className="bible">
        <div className="content">
            <h1 className="title">{bible.name}</h1>
            <span className="description">{bible.nameLong}</span>
        </div>
    </div>
);

export default Bible;