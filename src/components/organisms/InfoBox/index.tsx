import styles from './InfoBox.module.scss';

import classNames from 'classnames/bind';
import useGetImageSrc from '../../../hooks/useGetImageSrc';

import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Heading from '../../atoms/Heading';
import Shadow from '../../atoms/Shadow';

interface InfoBoxProps {
  theme?: 'dark' | 'light';
  variant?: 'left' | 'right';
  src: string;
  alt: string;
  heading: string;
  text: string;
  btnText?: string;
  imgShadow?: boolean;
}

const InfoBox = ({ theme = 'light', variant = 'left', src, alt, heading, text, btnText, imgShadow }: InfoBoxProps) => {
  const cx = classNames.bind(styles);

  const containerClasses = cx('container', {
    container_dark: theme === 'dark',
    variant_right: variant === 'right'
  });

  const secondaryTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <div className={containerClasses}>
      <div className={styles.img_box}>
        {imgShadow && <Shadow />}
        <img src={useGetImageSrc(src, true)} alt={alt} />
      </div>
      
      <div className={styles.content}>
        <Heading level="2" theme={secondaryTheme}>
          {heading}
        </Heading>
        <Text theme={secondaryTheme}>{text}</Text>
        {btnText && (
          <Button variant="arrow" theme={secondaryTheme}>
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
