import styles from './InfoBox.module.scss';

import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Heading from '../../atoms/Heading';

const InfoBox = () => {
  return (
    <div>
      <div>
        <img src="./assets/home/mobile/create-and-share.jpg" alt="man with camera on patio" />
      </div>
      <div className={styles.content}>
        <Heading level="2" variant="light">
          Create and share your photo stories.
        </Heading>
        <Text variant="light">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</Text>
        <Button variant="arrow" theme="secondary">
          Get an invite
        </Button>
      </div>
    </div>
  );
};

export default InfoBox;
