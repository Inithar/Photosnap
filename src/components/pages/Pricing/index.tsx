import styles from './Pricing.styles.scss';
import { header } from '../../../data/pricing.json';

import Wrapper from '../../atoms/Wrapper';
import InfoBox from '../../organisms/InfoBox';
import Beta from '../../organisms/Beta';
import ToggleInput from '../../atoms/ToggleInput';

const Pricing = () => (
  <Wrapper>
    <header>
      <InfoBox {...header} theme="dark" variant="right" />
    </header>
    <main>
      <section style={{ padding: '2rem' }}>
        <ToggleInput />
      </section>
      <section></section>
      <section>
        <Beta />
      </section>
    </main>
  </Wrapper>
);

export default Pricing;
