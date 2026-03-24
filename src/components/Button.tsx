import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
      <button
        type={type}
        onClick={onClick}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          backgroundColor: disabled ? '#6ee7b7' : '#22c55e',
          color: '#fff',
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.backgroundColor = '#16a34a'; }}
        onMouseLeave={e => { if (!disabled) e.currentTarget.style.backgroundColor = '#22c55e'; }}
        disabled={disabled}
        className={className}
      >
      {children}
    </button>
  );
};
export default Button;
