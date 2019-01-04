import React, { PureComponent } from 'react';
import { Button, ButtonGroup } from '@trendmicro/react-buttons';
import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import ensureArray from 'ensure-array';
import logo from '../logo.svg';
import '../App.css';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { link } from 'react-icons-kit/icomoon/link'
import { wrench } from 'react-icons-kit/icomoon/wrench'
import { pacman } from 'react-icons-kit/icomoon/pacman'
import { phone } from 'react-icons-kit/icomoon/phone'
import { fileText } from 'react-icons-kit/icomoon/fileText'
import HomePage from '../Pages/Home/HomePage'
import CalculateSnowdays from '../Pages/Projects/CalculateSnowdays/CalculateSnowdays';
import './Sidebar.css';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
    width: calc(100% - ${props => (props.expanded ? 240 : 64)}px);
`;

export default class extends PureComponent {
  state = {
    selected: 'home',
    expanded: false
  };

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  pageTitle = {
    'home': 'Home',
    'projects/calculatesnowdays': ['Projects', 'Snow Day Predictor'],
    'projects/others': ['Projects', 'Others']
  };

  renderBreadcrumbs() {
    const { selected } = this.state;
    const list = ensureArray(this.pageTitle[selected]);

    return (
      <Breadcrumbs>
        {list.map((item, index) => (
          <Breadcrumbs.Item
            active={index === list.length - 1}
            key={`${selected}_${index}`}
          >

          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs>
    );
  }

  navigate = (pathname) => () => {
    this.setState({ selected: pathname });
  };

  render() {
    const { expanded, selected } = this.state;

    return (
      <div className="fulldiv">

        {/* <ButtonGroup>
            <Button btnStyle="flat" onClick={this.navigate('home')}>
              Home
                        </Button>
            <Button btnStyle="flat" onClick={this.navigate('devices')}>
              Devices
                        </Button>
            <Button btnStyle="flat" onClick={this.navigate('reports')}>
              Reports
                        </Button>
            <Dropdown>
              <Dropdown.Toggle>
                Settings
                            </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem onClick={this.navigate('settings/policies')}>
                  Policies
                                </MenuItem>
                <MenuItem onClick={this.navigate('settings/network')}>
                  Network
                                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup> */}
        <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
          <SideNav.Toggle />
          <SideNav.Nav selected={selected}>
            <NavItem eventKey="home">
              <NavIcon>
                <div style={{ color: '#D3D3D3' }}>
                  <Icon size={24} icon={home} />
                </div>
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Home">
                Home
              </NavText>
            </NavItem>
            <NavItem eventKey="projects">
              <NavIcon>
                <div style={{ color: '#D3D3D3' }}>
                  <Icon size={24} icon={pacman} />
                </div>
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Projects">
                Projects
                            </NavText>
              <NavItem eventKey="projects/calculatesnowdays">
                <NavText title="Snow Day Predictor">
                  Snow Day Predictor
                                </NavText>
              </NavItem>
              <NavItem eventKey="projects/website">
                <NavText title="Website">
                  Personal Website
                                </NavText>
              </NavItem>
              <NavItem eventKey="projects/others">
                <NavText title="Others">
                  Others
                                </NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="resume">
              <NavIcon>
                <div style={{ color: '#D3D3D3' }}>
                  <Icon size={24} icon={fileText} />
                </div>
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Resume">
                Resume
              </NavText>
            </NavItem>
            <NavItem eventKey="contact">
              <NavIcon>
                <div style={{ color: '#D3D3D3' }}>
                  <Icon size={24} icon={phone} />
                </div>
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Contact">
                <a href="mailto:cnnr252@gmail.com">Contact Me</a>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <Main className="fullmain" expanded={expanded}>
          {this.state.selected == 'home' &&
            <HomePage />
          }
          {this.state.selected == 'projects/calculatesnowdays' &&
            <CalculateSnowdays />
          }
          {/* {this.state.selected} */}
        </Main>
      </div>
    );
  }
}