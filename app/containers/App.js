import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Header, Footer } from 'components';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
    }

    componentDidMount() {
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {})(App);
