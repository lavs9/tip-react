import React, {Component} from 'react'
import {Link} from 'react-router';
import { AppBar, FlatButton } from 'material-ui';
import {connect} from 'react-redux';

class App extends Component {
    constructor (props) {
        super(props);
    }
    
    handleClick (event) {
        event.preventDefault();
        console.log('clicked');
    }
    
    render () {
        let buttonStyle = {
            marginTop: '1%',
            color: 'white'
        };
        return (
            <AppBar
                title="TIPBABA" onLeftIconButtonTouchTap={this.handleClick.bind(this)}>
                <FlatButton label="About" backgroundColor="transparent" style={buttonStyle}/>
                <FlatButton label="Sign In" backgroundColor="transparent" style={buttonStyle}/>
                <FlatButton label="Sign Up" backgroundColor="transparent" style={buttonStyle}/>
            </AppBar>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(App);

