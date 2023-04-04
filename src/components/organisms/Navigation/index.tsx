import styles from './Navigation.module.scss';
import { navLinks } from '../../../data/layout.json';

import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

import Button from '../../atoms/Button';
import Wrapper from '../../atoms/Wrapper';
import NavLink from '../../atoms/NavLink';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationChange = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <Wrapper>
        <nav className={styles.nav}>
          <img src="./assets/shared/desktop/logo.svg" alt="Photosnap" />

          <div className={isOpen ? styles.open : ''}>
            {navLinks.map(({ to, text }) => (
              <NavLink to={to} onClick={handleNavigationChange} key={crypto.randomUUID()}>
                {text}
              </NavLink>
            ))}

            <div className={styles.separator} />
            <Button onClick={handleNavigationChange}>Get an invite</Button>
          </div>

          {useWindowSize() < 768 ? <img src={`./assets/shared/mobile/${isOpen ? 'close' : 'menu'}.svg`} alt="" onClick={handleNavigationChange} /> : <Button>Get an invite</Button>}
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navigation;
