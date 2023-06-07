import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-white.svg';
import FacebookLogo from '../social logos/facebook-logo';
import InstagramLogo from '../social logos/instagram-logo';
import TwitterLogo from '../social logos/twitter-logo';
import PinterestLogo from '../social logos/pinterest-logo';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer-setion">
      <div className="logo-conatiner">
        <img src={Logo} alt="" className="footer-logo" />
      </div>
      <div className="footer-links">
        <div className="footer-links__item">
          <h3 className="footer-links__title">features</h3>
          <Link>link shortening</Link>
          <Link>branded links</Link>
          <Link>analytics</Link>
        </div>

        <div className="footer-links__item">
          <h3 className="footer-links__title">resources</h3>
          <Link>blog</Link>
          <Link>developers</Link>
          <Link>support</Link>
        </div>

        <div className="footer-links__item">
          <h3 className="footer-links__title">company</h3>
          <Link>about</Link>
          <Link>our team</Link>
          <Link>careers</Link>
          <Link>contact</Link>
        </div>
      </div>
      <ul role="list" className="socials-list">
        <li className="socials__list-item">
          <FacebookLogo />
        </li>
        <li className="socials__list-item">
          <TwitterLogo />
        </li>
        <li className="socials__list-item">
          <PinterestLogo />
        </li>
        <li className="socials__list-item">
          <InstagramLogo />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
