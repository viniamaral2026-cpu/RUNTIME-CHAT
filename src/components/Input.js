import React from 'react';
import styles from '../styles/globals.css';

const Input = ({ type = 'text', value, onChange, placeholder, disabled, className, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="flex h-10 w-full rounded-md border border-border bg-background p-2 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      {...props}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
