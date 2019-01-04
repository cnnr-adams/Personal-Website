import React, { Component } from 'react';
import './HomePage.css';
export default class extends Component {

    render() {
        return (
            <div className="main">
                <div className="balanced">
                    <div className="box">
                        <img className="circle" src={require('../../media/profile.png')}></img>

                        <h1>
                            Hi! Welcome to my website.
                        </h1>
                        <br />
                        <h2>
                            I am an aspiring Software Engineer
                            that likes side projects, designing programs,
                            and programming in general. <br /> <br />

                            I'm currently studying Computer Science at the University of Waterloo.
                        </h2>
                    </div>
                    {/* <div class="buttons">
                        <a href="#" class="button">Resume</a>
                        <a href="#" class="button">Contact</a>
                    </div> */}
                </div>
            </div>
        )
    }
}