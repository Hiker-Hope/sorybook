import * as React from 'react';
import { SyntheticEvent, useState } from 'react';

import { Input } from './input';
import { Heading } from './heading';
import { Button } from './button';

import './styles.scss';

const validateEmail = (email: string): boolean => {
  const re = /(.+)@(.+){2,}\.(.+){2,}/;
  return re.test(String(email).toLowerCase());
};

const size = 's';

export const App = () => {
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: SyntheticEvent) => {
    if (e.target) {
      // @ts-ignore
      setValue(validateEmail(e.target.value));
    }
  };

  const handleValidate = () => {
    if (value) {
      setIsError(!validateEmail(value));
    }
  };

  const handleSubmit = () => {
    if (!isError) {
      console.log('Submitting');
    } else {
      console.log("Oops, there's an error");
    }
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div className={'wrapper'}>
      <Heading size={size} text={'Регистрация по email'}></Heading>
      <Input
        size={size}
        isDisabled={false}
        onChange={handleChange}
        onBlur={handleValidate}
        isError={isError}
        placeholder={'Введите свой email'}
      />
      <div className={'actions'}>
        <Button
          size={size}
          color={'grey'}
          disabled={false}
          text={'Отмена'}
          onClick={handleCancel}
        />
        <Button
          size={size}
          color={'blue'}
          disabled={isError}
          text={'Отправить'}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
