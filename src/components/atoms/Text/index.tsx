import { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './Text.module.scss';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  theme?: 'dark' | 'light';
}

const Text = ({ children, theme = 'dark', ...props }: TextProps) => {
  const cx = classNames.bind(styles);

  const className = cx(props.className, 'text', {
    text_light: theme === 'light'
  });

  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
};

export default Text;
