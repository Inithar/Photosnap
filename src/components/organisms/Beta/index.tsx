import styles from './Beta.module.scss';

import useGetImageSrc from '../../../hooks/useGetImageSrc';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Shadow from '../../atoms/Shadow';

const Beta = () => (
  <div className={styles.beta}>
    <Shadow />
    <img src={useGetImageSrc('./assets/shared/desktop/bg-beta.jpg', true)} />

    <div className={styles.content}>
      <Heading level="2" theme="light">
        We're in beta. Get your invite today!
      </Heading>
      <Button variant="arrow" theme="light">
        Get an invite
      </Button>
    </div>
  </div>
);

export default Beta;
