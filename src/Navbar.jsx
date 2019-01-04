import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '@trendmicro/react-buttons';
import './Navbar.css';
export default class extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        const { name } = this.props;

        return (
            <ul className="topbar">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a className="title" href="#home">Connor Adams</a>
                    </div>
                </div>
            </ul>
        );
    }
}