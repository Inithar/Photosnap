import styles from './Features.module.scss';
import { header, features } from '../../../data/features.json';

import Wrapper from '../../atoms/Wrapper';
import Grid from '../../atoms/Grid';
import FeatureBox from '../../molecules/FeatureBox';
import InfoBox from '../../organisms/InfoBox';

const Features = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <header>
        <InfoBox {...header} theme="dark" />
      </header>
      <main>
        <section>
          <Grid container className={styles.features}>
            {features.map(data => (
              <Grid item xs={12} sm={6} lg={4} key={crypto.randomUUID()} className={styles.features_item}>
                <FeatureBox {...data} />
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
    </Wrapper>
  );
};

export default Features;
