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

/**
 * Props for the navigation bar component
 * 
 * data
 */
interface Props {
  data?: any;
  previousScrollY?: Number
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a navigation bar doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const NavigationBar: React.SFC<Props> = ({ data, previousScrollY=0 }) => {

  const navbarRef = React.createRef<HTMLDivElement>();
  const menuRef = React.createRef<HTMLUListElement>();

  try {
    window.addEventListener('scroll', function(e) {
      if (!navbarRef.current) {
        return;
      }
  
      if (window.scrollY > 100 && !navbarRef.current.classList.contains("small")) {
        navbarRef.current.classList.add("small");
        previousScrollY = window.scrollY;
      } else if (window.scrollY < 100 && navbarRef.current.classList.contains("small")) {
        navbarRef.current.classList.remove("small");
        previousScrollY = window.scrollY;
      }
    });
  
  } catch(e) {
    console.log("window isn't working", e);
  }

  return (
    <div className="navigationBar" ref={navbarRef}>
      <Link to="/"><img src={require('../../images/Komodo.png')} alt="Komodo Digital" /></Link>
      <div className="hamburger">
        <Link to="/" onClick={(e)=>{
          e.preventDefault();
          if (menuRef.current) {
            menuRef.current.classList.toggle("open");
          }
        }}>Menu</Link>
      </div>
      <ul className="Menu" ref={menuRef}>
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
};

export default NavigationBar;
