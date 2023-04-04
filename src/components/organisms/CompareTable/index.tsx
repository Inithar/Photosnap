import styles from './CompareTable.module.scss';
import { features } from '../../../data/pricing.json';

import useWindowSize from '../../../hooks/useWindowSize';

import Heading from '../../atoms/Heading';
import CompareTableRow from '../../molecules/CompareTableRow';

const CompareTable = () => (
  <div className={styles.table}>
    <div className={styles.table_head}>
      <Heading level="5">The features</Heading>

      {useWindowSize() >= 768 && (
        <div>
          {Object.keys(features[0].options).map(option => (
            <p key={crypto.randomUUID()}>{option}</p>
          ))}
        </div>
      )}
    </div>

    <div className={styles.separator} />

    <div className={styles.table_body}>
      {features.map(feature => (
        <div key={crypto.randomUUID()}>
          <CompareTableRow {...feature} />
          <div className={`${styles.separator} ${styles.row_separator}`} />
        </div>
      ))}
    </div>
  </div>
);

export default CompareTable;
