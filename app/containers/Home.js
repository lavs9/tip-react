import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Home);