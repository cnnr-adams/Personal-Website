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
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
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
    'devices': ['Devices'],
    'reports': ['Reports'],
    'settings/policies': ['Settings', 'Policies'],
    'settings/network': ['Settings', 'Network']
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
            {item}
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
      <div>
        <div
          style={{
            marginLeft: expanded ? 240 : 64,
            padding: '15px 20px 0 20px'
          }}
        >
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
        </div>
        <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
          <SideNav.Toggle />
          <SideNav.Nav selected={selected}>
            <NavItem eventKey="home">
              <NavIcon>
                <div style={{ color: '#D3D3D3' }}>
                  <Icon size={24} icon={home} />
                </div> />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Home">
                Home
              </NavText>
            </NavItem>
            <NavItem eventKey="links">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Devices">
                Devices
                            </NavText>
            </NavItem>
            <NavItem eventKey="reports">
              <NavIcon>
                <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Reports">
                Reports
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
              <NavItem eventKey="projects/others">
                <NavText title="Others">
                  Others
                                </NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <Main expanded={expanded}>
          {this.renderBreadcrumbs()}
        </Main>
      </div>
    );
  }
}