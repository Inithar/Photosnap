import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: 'dark' | 'light';
  variant?: 'default' | 'arrow';
}

const Button = ({ children, variant = 'default', theme = 'dark', ...props }: ButtonProps) => {
  const cx = classNames.bind(styles);

  const className = cx(props.className, 'btn', {
    btn_dark: variant === 'default' && theme === 'dark',
    btn_light: variant === 'default' && theme === 'light',
    btn_arrow_dark: variant === 'arrow' && theme === 'dark',
    btn_arrow_light: variant === 'arrow' && theme === 'light'
  });

  return (
    <button {...props} className={className}>
      {children}
      {variant === 'arrow' && <img src={`./assets/shared/desktop/arrow-right-${theme === 'dark' ? 'black' : 'white'}.svg `} alt="arrow icon" />}
    </button>
  );
};

export default Button;
