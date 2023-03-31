import styles from './Home.module.scss';

import { infoBoxes } from '../../../data/home.json';

import Wrapper from '../../atoms/Wrapper';
import InfoBox from '../../organisms/InfoBox';

const Home = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <main>
        <section>
          {infoBoxes.map((data, i) => (
            <InfoBox {...data} theme={i === 0 ? 'dark' : 'light'} variant={i === 1 ? 'left' : 'right'} key={crypto.randomUUID()} />
          ))}
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
