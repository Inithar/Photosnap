import styles from './PriceBox.module.scss';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import classNames from 'classnames/bind';

interface PriceBoxProps {
  theme?: 'dark' | 'light';
  period: 'month' | 'year';
  main?: boolean;
  heading: string;
  text: string;
  price: {
    month: string;
    year: string;
  };
}

const PriceBox = ({ heading, text, price, theme = 'light', main, period }: PriceBoxProps) => {
  const secondaryTheme = theme === 'dark' ? 'light' : 'dark';

  const cx = classNames.bind(styles);

  const boxClassNames = cx('box', {
    dark_box: theme === 'dark',
    main_box: main
  });

  const priceBoxClassNames = cx('price_box', {
    dark_price_box: theme === 'dark'
  });

  return (
    <div className={boxClassNames}>
      <div>
        <div className={styles.description}>
          <Heading level="3" theme={secondaryTheme}>
            {heading}
          </Heading>
          <Text theme={secondaryTheme}>{text}</Text>
        </div>

        <div className={priceBoxClassNames}>
          <p className={styles.price}>{price[period]}</p>
          <p className={styles.period}>per {period}</p>
        </div>
      </div>

      <Button theme={secondaryTheme}>Pick plan</Button>
    </div>
  );
};

export default PriceBox;
