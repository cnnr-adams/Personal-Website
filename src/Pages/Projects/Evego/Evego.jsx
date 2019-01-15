import React, { Component } from 'react';
import './Evego.css';
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
export default class extends Component {

    render() {
        return (
            <div className="page-gradient-evego">
                <div className="balanced">
                    <div className="box">
                        <h1 className="website-title">
                            Evego - StarterHacks 2019</h1>
                        <h2 className="description">
                            Evego is a project created at StarterHacks 2019, with the goal of encouraging spontaneous events,
                            where everyone in the vicinity gets notified, and can come join the event.
                            </h2>
                        <a className="git" href="https://github.com/cnnr-adams/evego">
                            <Icon size={64} icon={github} />
                            <h2 className="github">
                                Github
                            </h2>
                        </a>
                        <img alt="evego" className="img" src={require('./evego.png')}></img>
                        <h2 className="tech">
                            Technologies Used:
                        </h2>
                        <div className="techs">
                            <img alt="docker" className="tech-image" src={require('../../../media/logos/docker.png')}></img>
                            <img alt="htmlcss" className="tech-image" src={require('../../../media/logos/htmlcss.png')}></img>
                            <img alt="javascript" className="tech-image" src={require('../../../media/logos/javascript.png')}></img>
                            <img alt="lightsail" className="tech-image" src={require('../../../media/logos/lightsail.png')}></img>
                            <img alt="nodejs" className="tech-image" src={require('../../../media/logos/nodejs.png')}></img>
                            <img alt="react-native" className="tech-image" src={require('../../../media/logos/react-native.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}