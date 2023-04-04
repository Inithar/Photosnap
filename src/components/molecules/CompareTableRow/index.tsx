import styles from './CompareTableRow.module.scss';

import Heading from '../../atoms/Heading';
import useWindowSize from '../../../hooks/useWindowSize';

type Options = {
  basic: boolean;
  pro: boolean;
  business: boolean;
};

interface CompareTableRowProps {
  feature: string;
  options: Options;
}

const CompareTableRow = ({ feature, options }: CompareTableRowProps) => (
  <div className={styles.row}>
    <Heading level="5">{feature}</Heading>
    <div className={styles.plans}>
      {Object.keys(options).map(option => (
        <div key={crypto.randomUUID()}>
          {useWindowSize() < 768 && <p>{option}</p>}
          {options[option as keyof Options] && <img src="./assets/pricing/desktop/check.svg" alt="" />}
        </div>
      ))}
    </div>
  </div>
);

export default CompareTableRow;
