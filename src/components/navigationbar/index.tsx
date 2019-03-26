/**
 * headline navigation bar that sits at the top of the page
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link, Location } from '@reach/router';
import Img from 'gatsby-image';

/**
 * Local dependencies
 */
import './NavigationBar.css';
import { any } from 'prop-types';

/**
 * Props for the navigation bar component
 *
 * data
 */
interface Props {
  data?: any;
  logo?: any;
  background?: string;
  inverted?: boolean;
}

/**
 *
 * Using a stateful component because a navigation bar needs access to the lifecycle.
 *
 * @param data
 */
class NavigationBar extends React.Component<Props> {
  navbarRef: any;
  menuRef: any;

  constructor(props) {
    super(props);

    this.navbarRef = React.createRef<HTMLDivElement>();
    this.menuRef = React.createRef<HTMLUListElement>();
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if (!this.navbarRef.current) {
        return;
      }

      if (window.scrollY > 100 && !this.navbarRef.current.classList.contains('small')) {
        this.navbarRef.current.classList.add('small');
        this.navbarRef.current.style['background-color'] = this.props.background
          ? this.props.background
          : this.props.inverted
          ? 'rgba(234,234,234,1)'
          : 'rgba(0,0,0,1)';
      } else if (window.scrollY < 100 && this.navbarRef.current.classList.contains('small')) {
        this.navbarRef.current.classList.remove('small');
        this.navbarRef.current.style['background-color'] = this.props.background
          ? this.props.background
          : this.props.inverted
          ? 'rgba(0,0,0,0)'
          : 'rgba(234,234,234,0)';
      }
    });
  }

  render() {
    const { logo } = this.props;
    const { inverted } = this.props;

    const backgroundStyle = this.props.background
      ? this.props.background
      : this.props.inverted
      ? 'rgba(234,234,234,0)'
      : 'rgba(0,0,0,0)';

    return (
      <div
        className={`komodoGridWrapper navigationBar ${inverted ? 'inverted' : ''}`}
        style={{
          background: backgroundStyle,
        }}
        ref={this.navbarRef}
      >
        <Link to="/">
          <Img fixed={logo.fixed} />
        </Link>
        <div className="hamburger">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (this.menuRef.current) {
                this.menuRef.current.classList.toggle('open');
              }
            }}
          >
            <img
              src={require('../../content/images/menu.svg')}
              width={64}
              height={64}
              style={{ width: 64, height: 64, marginTop: 10 }}
            />
          </Link>
        </div>
        <Location>
          {({ location }) => {
            const path = location.pathname.endsWith('/')
              ? location.pathname.slice(0, -1)
              : location.pathname;

            const homeLinkSelected = path === '/' || path === '' ? 'home-selected' : '';
            const aboutLinkSelected = path === '/about' ? 'selected' : '';
            const servicesLinkSelected = path === '/services' ? 'selected' : '';
            const caseLinkSelected =
              path === '/case-studies' || path.includes('/case-studies/') ? 'selected' : '';
            const insightsLinkSelected = path === '/insights' ? 'selected' : '';
            const contactLinkSelected = path === '/contact' ? 'selected' : '';

            return (
              <ul
                className="Menu"
                ref={this.menuRef}
                style={{
                  background: this.props.background ? this.props.background : 'rgba(0,0,0,0)',
                }}
              >
                <li className={`nav-link ${aboutLinkSelected} ${homeLinkSelected}`}>
                  <Link to={'about'}>About</Link>
                </li>
                <li className={`nav-link ${servicesLinkSelected} ${homeLinkSelected}`}>
                  <Link to={'services'}>Services</Link>
                </li>
                <li className={`nav-link ${caseLinkSelected} ${homeLinkSelected}`}>
                  <Link to={'case-studies'}>Case Studies</Link>
                </li>
                <li className={`nav-link ${insightsLinkSelected} ${homeLinkSelected}`}>
                  <Link to={'insights'}>Insights</Link>
                </li>
                <li className={`nav-link ${contactLinkSelected} ${homeLinkSelected}`}>
                  <Link to={'contact'}>Contact</Link>
                </li>
              </ul>
            );
          }}
        </Location>
      </div>
    );
  }
}

export default NavigationBar;
