import React, { Component } from 'react';
import './Others.css';
export default class extends Component {

    render() {
        return (
            <div className="page-gradient-others">
                <div className="balanced">
                    <div className="box">
                        <h1 className="website-title">
                            Other Projects</h1>
                        <a href="https://github.com/cnnr-adams/Sweaty-Post-ICS4U-RST" className="together">
                            <div className="project-title"> Sweaty Post ICS4U RST: </div>
                            <div className="project-desc"> Java game created from scratch </div>
                        </a>
                        <br />
                        <a href="https://github.com/cnnr-adams/Messaging-NewUnityProject" className="together">
                            <div className="project-title"> Messaging-NewUnityProject:  </div>
                            <div className="project-desc"> Messaging application created for hackathon </div>
                        </a>
                        <br />
                        <a href="https://github.com/cnnr-adams/" className="together">
                            <div className="project-title"> More:  </div>
                            <div className="project-desc"> See Github! </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}