import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Wrapper.module.scss';

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Wrapper = ({ children, ...props }: WrapperProps) => {
  const cx = classNames.bind(styles);

  const className = cx(props.className, 'wrapper');

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default Wrapper;
