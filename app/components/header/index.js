import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppBar, FlatButton, Drawer, MenuItem, IconButton, TextField } from 'material-ui';
import { connect } from 'react-redux';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import SearchIcon from 'material-ui/svg-icons/action/search';

class App extends Component {
    constructor (props, context) {
        super(props, context);

        this._handleToggle = this._handleToggle.bind(this);

        this.state = {
            open: false
        };
    }

    _handleToggle () {
        this.setState({open: !this.state.open});
    }

    render () {
        let buttonStyle = {
            marginTop: '1%',
            color: '#fff',
            textDecoration: 'none'
        };
        let titleStyle = {
            marginTop: '1%',
            color: '#573fe0',
            textDecoration: 'none'
        };
        let appBarStyleHome = {
            background: 'none',
            boxShadow: 'none',
            margin: '-8px -8px',
            position: 'fixed'
        };
        let appBarStyle = {
            margin: '-8px -8px',
            position: 'fixed'
        };
        return (
            <div>
                <AppBar
                    style={global.location && global.location.pathname === '/' ? appBarStyleHome: appBarStyle}
                    title={<Link to="/" style={titleStyle}><span>TIPBABA</span></Link>}
                    iconElementLeft={<IconButton onClick={this._handleToggle}><MenuIcon /></IconButton>} >

                    {global.location && global.location.pathname !== '/' &&
                        <div>
                            <TextField
                                hintStyle={{color: '#fff'}} inputStyle={{color: '#fff'}}
                                hintText='Search for stocks and experts'
                                type="search" />
                            <IconButton iconStyle={{fill: '#fff'}}><SearchIcon /></IconButton>
                        </div>
                    }

                        <Link to="/about" style={buttonStyle}><FlatButton label="About" backgroundColor="transparent"
                                                                          style={buttonStyle}/></Link>
                        <FlatButton label="Sign In" backgroundColor="transparent" style={buttonStyle}/>
                        <FlatButton label="Create Account" backgroundColor="transparent" style={buttonStyle}/>
                        <FlatButton label="Get Mobile App" backgroundColor="transparent" style={buttonStyle}/>
                </AppBar>
                <Drawer open={this.state.open}>
                    <AppBar
                        title={<Link to="/" style={buttonStyle}><span>TIPBABA</span></Link>}
                        iconElementLeft={<IconButton onClick={this._handleToggle}><CloseIcon /></IconButton>} />
                    <MenuItem onClick={this._handleToggle}>Home</MenuItem>
                    <MenuItem>Create Account</MenuItem>
                </Drawer>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps, {  })(App);

