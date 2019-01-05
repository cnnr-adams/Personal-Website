import React, { Component } from 'react';
import './CalculateSnowdays.css';
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
export default class extends Component {

    render() {
        return (
            <div className="full">
                <div className="balanced">
                    <div className="box">
                        <h1 className="snow">
                            <a href="http://www.calculatesnowdays.com">Snow Day Calculator</a>
                        </h1>
                        <h2 className="description">
                            Predicts/Calculates the chance of snow days using machine learning accurately and realistically
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
                            <img alt="docker" className="tech-image" src={require('../../../media/logos/docker.png')}></img>
                            <img alt="htmlcss" className="tech-image" src={require('../../../media/logos/htmlcss.png')}></img>
                            <img alt="javascript" className="tech-image" src={require('../../../media/logos/javascript.png')}></img>
                            <img alt="lightsail" className="tech-image" src={require('../../../media/logos/lightsail.jpg')}></img>
                            <img alt="nodejs" className="tech-image" src={require('../../../media/logos/nodejs.png')}></img>
                            <img alt="python" className="tech-image" src={require('../../../media/logos/python.png')}></img>
                            <img alt="tensorflow" className="tech-image" src={require('../../../media/logos/tensorflow.png')}></img>
                        </div>
                    </div>
                </div>
                <div className="snowflakes" aria-hidden="true">
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                </div>
            </div>
        )
    }
}