import React from 'react';
import { ButtonType } from '../../models/propTypes';

const Button = ({ type, label, hmtype, onClick }: ButtonType) => {
  return (
    <button onClick={onClick} className={`${type} button`} type={hmtype ?? 'button'}>
      {label}
    </button>
  );
};

export default Button;
