import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontIcon } from 'material-ui'

class App extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <footer style={{backgroundColor: '#232323'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 style={{color: '#fff'}}>FOLLOW US</h2> <br />
                            <FontIcon className="material-icons" >fa-facebook</FontIcon>
                            <FontIcon className="material-icons fa fa-facebook" />
                        </div>
                        <div className="col-md-4">
                            <span className="copyright">Copyright © Your Website 2014</span>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li><a href="#">Privacy Policy</a>
                                </li>
                                <li><a href="#">Terms of Use</a>
                                </li>
                            </ul>
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


