import * as React from 'react';
import { ChangeEvent } from 'react';
import './index.css';

const cn = require('classnames');

interface InputProps {
  onChange: (e: ChangeEvent) => void;
  onBlur: () => void;
  size: 's' | 'm' | 'l';
  isError: boolean;
  isDisabled: boolean;
  placeholder: string;
}

export function Input(props: InputProps) {
  const { onChange, isDisabled, onBlur, size, isError, placeholder } = props;
  return (
    <input
      className={cn(
        'input',
        `input_size_${size}`,
        `input_color_${isError ? 'red' : 'grey'}`,
        isDisabled && 'input_disabled',
      )}
      type="email"
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
}
