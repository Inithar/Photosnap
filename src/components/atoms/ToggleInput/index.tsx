import styles from './ToggleInput.module.scss';

import { InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';


interface ToggleInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ToggleInput = ({ ...props }: ToggleInputProps) => {
  const cx = classNames.bind(styles);
  const className = cx(props.className, 'input-field');

  return (
    <label className={className}>
      <input type="checkbox" {...props} />
      <span></span>
    </label>
  );
};

export default ToggleInput;
