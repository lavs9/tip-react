import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from 'components/header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    componentWillMount () {
        injectTapEventPlugin();
    }

    componentDidMount() {
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Header />
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {})(App);
