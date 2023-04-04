import styles from './Pricing.module.scss';
import { header, pricingBoxes } from '../../../data/pricing.json';

import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

import Wrapper from '../../atoms/Wrapper';
import Heading from '../../atoms/Heading';
import ToggleInput from '../../atoms/ToggleInput';
import PriceBox from '../../molecules/PriceBox';
import InfoBox from '../../organisms/InfoBox';
import Beta from '../../organisms/Beta';
import CompareTable from '../../organisms/CompareTable';

const Pricing = () => {
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  return (
    <Wrapper className={styles.wrapper}>
      <header>
        <InfoBox {...header} theme="dark" variant="right" />
      </header>
      <main>
        <section className={styles.pricing}>
          <div className={styles.period}>
            <p>Monthly</p>
            <ToggleInput onChange={e => setPeriod(e.target.checked ? 'year' : 'month')} />
            <p>Yearly</p>
          </div>

          <div className={styles.pricing_boxes}>
            {pricingBoxes.map((data, i) => (
              <PriceBox {...data} period={period} theme={i === 1 ? 'dark' : 'light'} bigger={i === 1} key={crypto.randomUUID()} />
            ))}
          </div>
        </section>

        <section className={styles.compare_table}>
          {useWindowSize() >= 768 && <Heading level="2">Compare</Heading>}
          <CompareTable />
        </section>

        <section>
          <Beta />
        </section>
      </main>
    </Wrapper>
  );
};

export default Pricing;
