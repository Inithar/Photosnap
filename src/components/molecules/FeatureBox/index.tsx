import styles from './FeatureBox.module.scss';

import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';

interface FeatureBoxProps {
  src: string;
  heading: string;
  text: string;
}

const FeatureBox = ({ src, heading, text }: FeatureBoxProps) => (
  <div className={styles.box}>
    <div className={styles.box_icon}>
      <img src={src} alt="" />
    </div>
    <Heading level="4">{heading}</Heading>
    <Text>{text}</Text>
  </div>
);

export default FeatureBox;
