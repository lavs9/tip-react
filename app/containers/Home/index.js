import React, {Component} from 'react';
import {connect} from 'react-redux';
import Upper from './Upper'
import Lower from './Lower'

class Home extends Component {
    constructor (props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Upper />
                <Lower />
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps, {})(Home);
