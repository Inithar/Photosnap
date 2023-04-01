import styles from './Stories.module.scss';
import { header, storyCards } from '../../../data/stories.json';

import useGetImageSrc from '../../../hooks/useGetImageSrc';

import Wrapper from '../../atoms/Wrapper';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const { src, heading, mainHeading, createdAt, createdBy, text, btnText } = header;

const Stories = () => {
  return (
    <Wrapper>
      <header className={styles.header}>
        <div className={styles.header_img}>
          <div className={styles.shadow} />
          <img src={useGetImageSrc(src, true)} />
        </div>

        <div className={styles.header_content}>
          <Heading level="4" theme="light">
            {heading}
          </Heading>
          <Heading level="2" theme="light">
            {mainHeading}
          </Heading>
          <p className={styles.created}>
            <span>{createdAt}</span> {createdBy}
          </p>
          <Text theme="light">{text}</Text>
          <Button theme="light" variant="arrow">
            {btnText}
          </Button>
        </div>
      </header>

      <main>

      </main>
    </Wrapper>
  );
};

export default Stories;
