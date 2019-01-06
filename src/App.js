import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import React from 'react';
import Navbar from './Navbar';
import SideNav from './Sidebar/Sidebar';
class App extends React.Component {
    componentDidMount() {
        document.title = "Connor Adams"
    }
    state = {
        theme: 'default'
    };

    render() {
        const name = 'React SideNav';
        const url = 'https://github.com/trendmicro-frontend/react-sidenav';
        return (
            <div>
                <Navbar name={name} url={url}>
                </Navbar>
                <div
                    style={{
                        position: 'relative',
                        height: 'calc(100vh - 51px)',
                        width: 'auto'
                    }}
                >
                    <SideNav />
                </div>
            </div>
        );
    }
}

export default App;