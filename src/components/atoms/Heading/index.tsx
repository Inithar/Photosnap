import { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './Heading.module.scss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: '1' | '2' | '3' | '4';
  variant?: 'dark' | 'light';
}

const Heading = ({ children, level, variant = 'dark', ...props }: HeadingProps) => {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;

  const cx = classNames.bind(styles);

  const className = cx(props.className, 'heading', {
    heading_light: variant === 'light',
    [`heading_${level}`]: level,
  });

  return (
    <HeadingTag {...props} className={className}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
