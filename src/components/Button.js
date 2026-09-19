import React from 'react';
import styles from '../styles/globals.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, disabled, className }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variantClasses = variant === 'primary' ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200';
  const sizeClasses = size === 'small' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-base';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};

export default Button;
