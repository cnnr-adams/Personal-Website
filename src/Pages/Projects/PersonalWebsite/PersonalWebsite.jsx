import React, { Component } from 'react';
import './PersonalWebsite.css';
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
export default class extends Component {

    render() {
        return (
            <div className="full-p">
                <div className="balanced">
                    <div className="box">
                        <h1 className="website-title">
                            This Website
                        </h1>
                        <h2 className="description">
                            All about me made in React Native to learn the framework
                            </h2>
                        <a className="git" href="https://github.com/cnnr-adams/snow-day-predictor-frontend">
                            <Icon size={64} icon={github} />
                            <h2 className="github">
                                Github
                            </h2>
                        </a>
                        <h2 className="tech">
                            Technologies Used:
                        </h2>
                        <div className="techs">
                            <img alt="react-native" className="tech-image" src={require('../../../media/logos/react-native.png')}></img>
                            <img alt="htmlcss" className="tech-image" src={require('../../../media/logos/htmlcss.png')}></img>
                            <img alt="javascript" className="tech-image" src={require('../../../media/logos/javascript.png')}></img>
                            <img alt="docker" className="tech-image" src={require('../../../media/logos/docker.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}