import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import { footerIcons, footerLinks } from '../../../data/layout.json';

import Wrapper from '../../atoms/Wrapper';
import Button from '../../atoms/Button';
import NavLink from '../../atoms/NavLink';

const Footer = () => (
  <Wrapper>
    <footer className={styles.footer}>
      <div>
        <div className={styles.left_section}>
          <img src="./assets/shared/desktop/logo-white.svg" alt="Photosnap" />

          <div className={styles.socials}>
            {footerIcons.map(({ icon, to }) => (
              <Link to={to} target="_blank" key={crypto.randomUUID()}>
                <img src={icon} alt="" />
              </Link>
            ))}
          </div>

          <nav className={styles.nav}>
            {footerLinks.map(({ to, text }) => (
              <NavLink to={to} key={crypto.randomUUID()}>
                {text}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.right_section}>
          <Button variant="arrow" theme="light">
            Get an invite
          </Button>

          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </Wrapper>
);

export default Footer;
