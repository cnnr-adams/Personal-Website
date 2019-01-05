import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Navbar.css';
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
import { mail4 } from 'react-icons-kit/icomoon/mail4'
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2'
export default class extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <ul className="topbar">
                <div className="container-fluid">

                    <div className="navbar-brand">
                        <a className="title" href="#home">Connor Adams</a>
                    </div>
                    <div className="right">
                        <a className="nodec" href="https://github.com/cnnr-adams">
                            <Icon size={40} icon={github} />
                        </a>
                        <a className="nodec" href="mailto:cnnr252@gmail.com">
                            <Icon size={40} icon={mail4} />
                        </a>
                        <a className="nodec" href="https://www.linkedin.com/in/connor-adams-6b2954148/">
                            <Icon style={{ color: '#0077B5' }} size={40} icon={linkedin2} />
                        </a>
                    </div>
                </div>
            </ul>
        );
    }
}