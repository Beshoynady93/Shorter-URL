import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import HamburgerIcon from '../../assets/images/hamburger-menu.svg';

import './header.styles.scss';

const Header = () => {
  const hamburgerMenu = useRef();
  const toggleMenu = () => {
    if (hamburgerMenu.current.getAttribute('aria-expanded') === 'false')
      hamburgerMenu.current.setAttribute('aria-expanded', 'true');
    else hamburgerMenu.current.setAttribute('aria-expanded', 'false');
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-logo">
          <NavLink to="/">
            <img src={Logo} alt="Company Logo" />
          </NavLink>
        </div>
        <div className="hamburger-btn-container">
          <button className="hamburger-btn" onClick={toggleMenu}>
            <img src={HamburgerIcon} alt="hamburger menue button" />
          </button>
        </div>
        <ul
          role="list"
          aria-expanded="false"
          className="nav-bar__hamburger-menu"
          ref={hamburgerMenu}
        >
          <li className="nav-links">
            <NavLink to="/featured">featured</NavLink>
            <NavLink to="/pricing">pricing</NavLink>
            <NavLink to="/resources">resources</NavLink>
          </li>
          <li className="nav-buttons">
            <button className="nav-buttons__login">login</button>
            <button className="nav-buttons__sign-up">sign up</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
