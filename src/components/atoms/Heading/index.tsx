import { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './Heading.module.scss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: '1' | '2' | '3' | '4' | '5';
  theme?: 'dark' | 'light';
}

const Heading = ({ children, level, theme = 'dark', ...props }: HeadingProps) => {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;

  const cx = classNames.bind(styles);

  const className = cx(props.className, 'heading', {
    heading_light: theme === 'light',
    [`heading_${level}`]: level
  });

  return (
    <HeadingTag {...props} className={className}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
