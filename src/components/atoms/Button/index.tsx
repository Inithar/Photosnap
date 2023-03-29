import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: 'primary' | 'secondary';
  variant?: 'default' | 'arrow';
}

const Button = ({ children, variant = 'default', theme = 'primary', ...props }: ButtonProps) => {
  const cx = classNames.bind(styles);

  const className = cx(props.className, 'btn', {
    btn_primary: variant === 'default' && theme === 'primary',
    btn_secondary: variant === 'default' && theme === 'secondary',
    btn_arrow_primary: variant === 'arrow' && theme === 'primary',
    btn_arrow_secondary: variant === 'arrow' && theme === 'secondary'
  });

  return (
    <button {...props} className={className}>
      {children}
      {variant === 'arrow' && <img src={`./assets/icons/arrow-right-${theme === 'primary' ? 'black' : 'white'}.svg `} alt="arrow icon" />}
    </button>
  );
};

export default Button;
