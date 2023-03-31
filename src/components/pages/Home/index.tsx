import styles from './Home.module.scss';

import { infoBoxes } from '../../../data/home.json';
import { storyCards } from '../../../data/stories.json';

import Wrapper from '../../atoms/Wrapper';
import InfoBox from '../../organisms/InfoBox';
import Grid from '../../atoms/Grid';
import StoryCard from '../../molecules/StoryCard';

const Home = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <main>
        <section>
          {infoBoxes.map((data, i) => (
            <InfoBox {...data} theme={i === 0 ? 'dark' : 'light'} variant={i === 1 ? 'left' : 'right'} key={crypto.randomUUID()} />
          ))}
        </section>
        <section>
          <Grid container>
            {storyCards.map(data => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <StoryCard {...data} />
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
