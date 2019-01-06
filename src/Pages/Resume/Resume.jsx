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
            <object className="resume" data={require("./resume.pdf")} type="application/pdf">
                <embed className="resume" src={require("./resume.pdf")} type="application/pdf" />
            </object>
        );
    }
}