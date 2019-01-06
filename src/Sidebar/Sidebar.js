import React, { PureComponent } from 'react';
import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import ensureArray from 'ensure-array';
import '../App.css';
import styled from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { pacman } from 'react-icons-kit/icomoon/pacman'
import { fileText } from 'react-icons-kit/icomoon/fileText'
// import { user } from 'react-icons-kit/icomoon/user'
import HomePage from '../Pages/Home/HomePage'
import CalculateSnowdays from '../Pages/Projects/CalculateSnowdays/CalculateSnowdays';
import PersonalWebsite from '../Pages/Projects/PersonalWebsite/PersonalWebsite';
import Others from '../Pages/Projects/Others/Others';
import Resume from '../Pages/Resume/Resume';
import AboutMe from '../Pages/AboutMe/AboutMe';
import '../Pages/Projects/Projects.css';
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

  constructor(props) {
    super(props);
    this.state = {
      selected: 'home',
      expanded: false,
      width: props.width
    };

  }

  componentDidMount() {
    this.setState({ width: window.innerWidth });
  }
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
        <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
          {this.state.width >= 600 && <SideNav.Toggle />}
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
            {/* <NavItem eventKey="about">
              <NavIcon>
                <div style={{ color: '#D3D3D3' }}>
                  <Icon size={24} icon={user} />
                </div>
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="About Me">
                About Me
              </NavText>
            </NavItem> */}
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
          </SideNav.Nav>
        </SideNav>
        <Main className="fullmain" expanded={expanded}>
          {this.state.selected === 'home' &&
            <HomePage />
          }
          {this.state.selected === 'about' &&
            <AboutMe />
          }
          {this.state.selected === 'projects/calculatesnowdays' &&
            <CalculateSnowdays />
          }
          {this.state.selected === 'projects/website' &&
            <PersonalWebsite />
          }
          {this.state.selected === 'projects/others' &&
            <Others />
          }
          {this.state.selected === 'resume' &&
            <Resume />
          }
          {/* {this.state.selected} */}
        </Main>
      </div>
    );
  }
}