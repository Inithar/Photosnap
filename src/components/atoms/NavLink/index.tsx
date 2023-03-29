import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './NavLink.module.scss';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  const cx = classNames.bind(styles);

  const className = cx(props.className, 'link');

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
