/**
 * headline navigation bar that sits at the top of the page
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

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

  constructor(props){
    super(props);

    this.navbarRef = React.createRef<HTMLDivElement>();
    this.menuRef = React.createRef<HTMLUListElement>();
  
  }

  componentDidMount() {

    window.addEventListener('scroll', (e) => {
        if (!this.navbarRef.current) {
          return;
        }
    
        if (window.scrollY > 100 && !this.navbarRef.current.classList.contains("small")) {
          this.navbarRef.current.classList.add("small");
        } else if (window.scrollY < 100 && this.navbarRef.current.classList.contains("small")) {
          this.navbarRef.current.classList.remove("small");
        }
      });
  
  }

  render() {

    const { inverted } = this.props;
    const komodo = inverted ? require('../../images/Komodo_black.png') : require('../../images/Komodo.png'); 
    return (
      <div className={`komodoGridWrapper navigationBar ${inverted ? "inverted" : "" }`} style={{ background: this.props.background ? this.props.background : "#000000" }} ref={this.navbarRef}>
        <Link to="/"><img src={komodo} alt="Komodo Digital" /></Link>
        <div className="hamburger">
          <Link to="/" onClick={(e)=>{
            e.preventDefault();
            if (this.menuRef.current) {
              this.menuRef.current.classList.toggle("open");
            }
          }}><img src={require('../../images/menu.svg')} width={64} height={64} style={{ width: 64, height: 64, marginTop: 10}} /></Link>
        </div>
        <ul className="Menu" ref={this.menuRef} style={{ background: this.props.background ? this.props.background : "#000000" }}>
          <li>
            <Link to={'about'}>About</Link>
          </li>
          <li>
            <Link to={'case-studies'}>Case Studies</Link>
          </li>
          <li>
            <Link to={'blog-list'}>Insights</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    );
  
  }

};

export default NavigationBar;
