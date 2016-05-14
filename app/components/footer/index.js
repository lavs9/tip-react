import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FlatButton, IconButton } from 'material-ui';

class App extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        let buttonStyle = {
            marginTop: '1%',
            color: '#573fe0',
            textDecoration: 'none'
        };
        let iconStyle = {
            color: '#fff',
            padding: '16%'
        };

        return (
            <footer style={{backgroundColor: '#232323'}}>
                <div className="container">
                    <div className="row" style={{marginBottom: '2%'}}>
                        <div className="col-md-4" style={{marginTop: '3%'}}>
                            <h3 style={{color: '#fff'}}>FOLLOW US</h3> <br />
                            <ul className="list-inline">
                                <li>
                                    <IconButton
                                        className="btn btn-social-icon btn-facebook"
                                        iconStyle={iconStyle}
                                        iconClassName="fa fa-facebook"
                                        style={{backgroundColor: '#2d4373'}}
                                        tooltip="Facebook"
                                        href="https://www.facebook.com"
                                        linkButton={true}
                                    />
                                </li>
                                <li>
                                    <IconButton
                                        className="btn btn-social-icon btn-google"
                                        iconStyle={iconStyle}
                                        iconClassName="fa fa-google-plus"
                                        style={{backgroundColor: '#c23321'}}
                                        tooltip="Google Plus"
                                        href="https://plus.google.com"
                                        linkButton={true}
                                    />
                                </li>
                                <li>
                                    <IconButton
                                        className="btn btn-social-icon btn-twitter"
                                        iconStyle={iconStyle}
                                        iconClassName="fa fa-twitter"
                                        style={{backgroundColor: '#2795e9'}}
                                        tooltip="Twitter"
                                        href="https://www.twitter.com"
                                        linkButton={true}
                                    />
                                </li>
                                <li>
                                    <IconButton
                                        className="btn btn-social-icon btn-linkedin"
                                        iconStyle={iconStyle}
                                        iconClassName="fa fa-linkedin"
                                        style={{backgroundColor: '#005983'}}
                                        tooltip="LinkedIn"
                                        href="https://www.linkedin.com"
                                        linkButton={true}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4" style={{marginTop: '12%', marginLeft: '10%'}}>
                            <span className="copyright">Copyright © TIPBABA2015</span>
                        </div>
                        <div className="col-md-4 text-left" style={{marginTop: '3%', marginLeft: '-10%', color: '#5d5d5d'}}>
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to='/blog' style={buttonStyle}><FlatButton label='BLOG' backgroundColor="transparent"
                                                                                           style={buttonStyle} labelStyle={{fontWeight: '900'}}/></Link>
                                </div>
                                <div className="col-md-6">
                                    <Link to='/legal-terms' style={buttonStyle}><FlatButton label='LEGAL TERMS' backgroundColor="transparent"
                                                                                      style={buttonStyle} labelStyle={{fontWeight: '900'}}/></Link>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Link to='/team' style={buttonStyle}><FlatButton label='THE TEAM' backgroundColor="transparent"
                                                                                     style={buttonStyle} labelStyle={{fontWeight: '900'}}/></Link>
                                </div>
                                <div className="col-md-6">
                                    <Link to='/contact-us' style={buttonStyle}><FlatButton label='CONTACT US' backgroundColor="transparent"
                                                                                            style={buttonStyle} labelStyle={{fontWeight: '900'}}/></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

function mapStateToProps() {
    return { };
}


export default connect(mapStateToProps, {  })(App);


