import React from 'react';
import { connect } from 'react-redux';

import { fetchBibles } from '../../redux/bible/bible.actions';

import Bible from '../bible/bible.component';

import './bible-list.styles.scss';

class BibleList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBibles());
    }

    render() {
        const { error, loading, bibles } = this.props;

        if (error) {
            return <div className="error">Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="bible-list">
            {bibles.map(bible =>
                    <Bible key={bible.id} bible={bible} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bibles: state.bibles.items,
    loading: state.bibles.loading,
    error: state.bibles.error
});

export default connect(mapStateToProps)(BibleList);