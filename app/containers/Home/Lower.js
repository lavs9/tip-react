import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Avatar } from 'material-ui';

class Lower extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        let avatarStyle = {marginLeft: '40%'};
        let textStyle = {color: '#fff', fontWeight: '300'};
        let headingStyle = {color: '#fff', fontWeight: '900', textAlign: 'center'};
        let divStyle = {marginTop: '10%', marginLeft: '4%'};
        return (
            <div className="jumbotron text-center landing-2-1" style={{padding: '0px 0px', marginBottom: '0px'}}>
                <div>
                    <div className="text-left">
                        <div className="col-md-6 landing-3">
                            <div style={divStyle}>
                                <Avatar
                                    src="http://dev.subham.me/homepageicon/icon1.png"
                                    size={150}
                                    style={avatarStyle}
                                />

                                <h2 style={headingStyle}>Evaluate Investment Advice</h2>
                                <p style={textStyle}>Know who to trust by looking at performance of anyone giving
                                    investment advice<br />
                                    See what the smartest analysts have to say about your stocks
                                    and whyE</p>
                            </div>
                        </div>
                        <div className="col-md-6 landing-4">
                            <div style={divStyle}>
                                <Avatar
                                    src="http://dev.subham.me/homepageicon/icon2.png"
                                    size={150}
                                    style={avatarStyle}
                                />

                                <h2 style={headingStyle}>Get Investment Ideas</h2>
                                <p style={textStyle}>See which stocks top Dalal Street analysts are recommending.<br/>
                                    Live feeds of recommendations</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left">
                        <div className="col-md-6 landing-5">
                            <div style={divStyle}>
                                <Avatar
                                    src="http://dev.subham.me/homepageicon/icon3.png"
                                    size={150}
                                    style={avatarStyle}
                                />

                                <h2 style={headingStyle}>Perform Research</h2>
                                <p style={textStyle}>Check if leading mutual funds are buying or selling your stocks
                                    and why.<br/>
                                    Simple Visualizations to help you understand complicated
                                    financial metrics<br/>
                                    Take better decisions based on unique data Sets</p>
                            </div>
                        </div>
                        <div className="col-md-6 landing-6">
                            <div style={divStyle}>
                                <Avatar
                                    src="http://dev.subham.me/homepageicon/icon4.png"
                                    size={150}
                                    style={avatarStyle}
                                />

                                <h2 style={headingStyle}>Discover Stocks</h2>
                                <p style={textStyle}>The next big stock is now within your reach. Filter, search and
                                    perform research to see rising stocks.<br />
                                    Forget about staring at multiple screens and researching
                                    multiple sites.</p>
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

export default connect(mapStateToProps, {})(Lower);
