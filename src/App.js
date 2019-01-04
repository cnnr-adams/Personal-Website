import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import { Button } from '@trendmicro/react-buttons';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import SideNav from './Sidebar/Sidebar';
class App extends React.Component {
    state = {
        theme: 'default'
    };

    render() {
        console.log("here");
        const name = 'React SideNav';
        const url = 'https://github.com/trendmicro-frontend/react-sidenav';
        return (
            <div>
                <Navbar name={name} url={url}>
                </Navbar>
                <div
                    style={{
                        position: 'relative',
                        height: 'calc(100vh - 50px)'
                    }}
                >
                    {this.state.theme === 'default' &&
                        <SideNav />
                    }
                    {this.state.theme === 'styled' &&
                        <SideNav />
                    }
                </div>
            </div>
        );
    }
}

export default App;