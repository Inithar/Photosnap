import styles from './StoryCard.module.scss';

import useGetImageSrc from '../../../hooks/useGetImageSrc';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Shadow from '../../atoms/Shadow';

interface StoryCardProps {
  src: string;
  title: string;
  author: string;
  date?: string;
}

const StoryCard = ({ src, title, author, date }: StoryCardProps) => (
  <div className={styles.card}>
    <Shadow />
    <img src={useGetImageSrc(src)} alt="" />

    <div className={styles.card_content}>
      {date && <p>{date}</p>}
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

export default StoryCard;
