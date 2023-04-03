import styles from './Home.module.scss';

import { infoBoxes } from '../../../data/home.json';
import { storyCards } from '../../../data/stories.json';
import { features } from '../../../data/features.json';

import useWindowSize from '../../../hooks/useWindowSize';

import Wrapper from '../../atoms/Wrapper';
import InfoBox from '../../organisms/InfoBox';
import Grid from '../../atoms/Grid';
import StoryCard from '../../molecules/StoryCard';
import FeatureBox from '../../molecules/FeatureBox';

const Home = () => (
  <Wrapper className={styles.wrapper}>
    <main>
      <section>
        {infoBoxes.map((data, i) => (
          <InfoBox {...data} theme={i === 0 ? 'dark' : 'light'} variant={i !== 1 ? 'right' : 'left'} key={crypto.randomUUID()} />
        ))}
      </section>

      <section>
        <Grid container>
          {storyCards.slice(0, 4).map(data => (
            <Grid item xs={12} sm={6} lg={3} key={crypto.randomUUID()}>
              <StoryCard {...data} />
            </Grid>
          ))}
        </Grid>
      </section>

      <section>
        <Grid container spacing={useWindowSize() >= 992 ? 'lg' : undefined} className={styles.features}>
          {features.slice(0, 3).map(data => (
            <Grid item xs={12} lg={4} key={crypto.randomUUID()}>
              <FeatureBox {...data} />
            </Grid>
          ))}
        </Grid>
      </section>
    </main>
  </Wrapper>
);

export default Home;
