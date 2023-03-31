import styles from './InfoBox.module.scss';

import classNames from 'classnames/bind';
import useGetImageSrc from '../../../hooks/useGetImageSrc';

import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Heading from '../../atoms/Heading';

interface InfoBoxProps {
  theme?: 'dark' | 'light';
  variant?: 'left' | 'right';
  src: string;
  alt: string;
  heading: string;
  text: string;
  btnText: string;
}

const InfoBox = ({ theme = 'light', variant = 'right', src, alt, heading, text, btnText }: InfoBoxProps) => {
  const cx = classNames.bind(styles);

  const containerClasses = cx('container', {
    container_dark: theme === 'dark',
    variant_left: variant === 'left'
  });

  const secondaryTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <div className={containerClasses}>
      <img src={useGetImageSrc(src, true)} alt={alt} />
      <div className={styles.content}>
        <Heading level="2" theme={secondaryTheme}>
          {heading}
        </Heading>
        <Text theme={secondaryTheme}>{text}</Text>
        <Button variant="arrow" theme={secondaryTheme}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default InfoBox;
