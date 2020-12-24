import * as React from 'react';
import './index.scss';

const cn = require('classnames');

interface HeaderProps {
  size: 's' | 'm' | 'l';
  text: string;
}

export const Heading = (props: HeaderProps) => {
  const { size, text } = props;
  return <h2 className={cn('heading', `heading_size_${size}`)}>{text}</h2>;
};
