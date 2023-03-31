import styles from './StoryCard.module.scss';

import useGetImageSrc from '../../../hooks/useGetImageSrc';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

interface StoryCardProps {
  src: string;
  title: string;
  author: string;
  date: string;
}

const StoryCard = ({ src, title, author, date }: StoryCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_shadow} />
      <img src={useGetImageSrc(src)} alt="" />

      <div className={styles.card_content}>
        <Heading level="4" theme="light">
          {title}
        </Heading>
        <p>by {author}</p>
        <div className={styles.line} />
        <Button variant="arrow" theme="light">
          read stroy
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;
