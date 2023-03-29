import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Navigation.module.scss';
import { links } from '../../../data/layout.json';

import Button from '../../atoms/Button';
import Wrapper from '../../atoms/Wrapper';
import useWindowSize from '../../../hooks/useWindowSize';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowSize();

  const handleNavigationChange = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <Wrapper>
        <nav className={styles.nav}>
          <img src="./assets/shared/desktop/logo.svg" alt="Photosnap" />

          <div className={isOpen ? styles.open : ''}>
            {links.map(({ to, text }) => (
              <Link to={to} onClick={handleNavigationChange}>
                {text}
              </Link>
            ))}

            <div className={styles.separator} />
            <Button onClick={handleNavigationChange}>Get an invite</Button>
          </div>

          {windowWidth < 768 ? <img src={`./assets/shared/mobile/${isOpen ? 'close' : 'menu'}.svg`} alt="" onClick={handleNavigationChange} /> : <Button>Get an invite</Button>}
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navigation;
