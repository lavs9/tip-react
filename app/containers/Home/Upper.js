import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';
import { IconButton, TextField, Subheader, FlatButton } from 'material-ui';
import SearchIcon from '../../../node_modules/material-ui/svg-icons/action/search';
import { Badge } from 'react-bootstrap'

class Upper extends Component {
    constructor (props) {
        super(props);
        this.state = {
            subHeaders : [
                {title: 'DAILY FEED', route: '/daily-feed'},
                {title: 'TRENDING STOCKS', route: '/trending-stocks'},
                {title: 'TOP STOCKS', route: '/top-stocks'},
                {title: 'TOP MARKET', route: '/top-market'},
                {title: 'NEWS', route: '/news'}
            ]
        }
    }

    render() {
        let buttonStyle = {
            marginTop: '1%',
            color: '#fff',
            textDecoration: 'none'
        };
        let subHeaders = _.map(this.state.subHeaders, (value, index) => {
            return (
                <div className="col-md-2" key={index}>
                    <Link to={value.route} style={buttonStyle}><FlatButton label={value.title} backgroundColor="transparent"
                                                                           style={buttonStyle} labelStyle={{fontWeight: '900'}}/></Link>
                </div>
            )
        });
        return (
            <div style={{padding: '0px 0px'}}>
                <div className="landing-1-1">
                    <div className="jumbotron text-center  landing-1-2" style={{marginBottom: '0px'}}>
                        <div style={{marginTop: '10%'}}>
                            <TextField type="text"
                                       floatingLabelStyle={{color: '#fff'}} inputStyle={{color: '#fff'}} style={{width: '50%'}}
                                       floatingLabelText='Search for stocks and experts'
                                       type="search" />
                            <IconButton iconStyle={{fill: '#fff'}} tooltip="Search"><SearchIcon /></IconButton>
                        </div>
                        <div className="col-md-4"></div><br />
                        <div className="col-md-6" style={{ marginLeft: '8%' }}>
                            <p style={{fontSize: '12px', color: '#fff' }}>TRENDING SEARCH&nbsp; &nbsp;
                                <Badge>APPL</Badge> <Badge>APPL</Badge> <Badge>APPL</Badge></p>
                        </div>
                        <br /><br />
                        <div style={{marginTop: '5%'}}>
                            <div className="col-md-1"></div>
                            {subHeaders}
                        </div>
                        <br /><br />
                    </div>

                    <div className="text-center landing-1-3">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" style={{marginTop: '4%'}}>
                            <div className="site-heading" style={{marginBottom: '5%'}}>
                                <h3 >
                                    You wake up in the morning and check out what's new in the market today.<br/>
                                    You see what the word is on the street. But who do you listen to?
                                </h3>
                                <br />
                                <Link to='/' style={buttonStyle}><FlatButton label='Learn More' backgroundColor="#000"
                                                                             style={buttonStyle}/></Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps, {})(Upper);
