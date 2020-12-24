import * as React from 'react';
import './index.css';

const cn = require('classnames');

interface ButtonProps {
  size: 's' | 'm' | 'l';
  color: 'yellow' | 'blue' | 'green' | 'grey' | 'red';
  disabled: boolean;
  text: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { onClick, color, size, disabled, text } = props;
  return (
    <button
      className={cn(
        'button',
        `button_size_${size}`,
        `button_color_${color}`,
        disabled && 'button_disabled',
      )}
      onClick={onClick}
      type={'button'}
    >
      {text}
    </button>
  );
};
