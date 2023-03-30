import styles from './Home.module.scss';

import Wrapper from '../../atoms/Wrapper';
import InfoBox from '../../organisms/InfoBox';

const Home = () => {
  return (
    <Wrapper>
      <main>
        <section>
          <InfoBox />
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
