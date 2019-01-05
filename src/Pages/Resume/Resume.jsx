import React, { Component } from 'react';
import './Resume.css';
export default class extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    render() {

        return (
            <div>
                <img alt="Resume" className="resume" src={require('../../media/resume-website.png')}></img>
            </div>
        );
    }
}