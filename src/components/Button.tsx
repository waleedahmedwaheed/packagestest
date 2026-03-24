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
          backgroundColor: disabled ? '#fca5a5' : '#ef4444',
          color: '#fff',
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.backgroundColor = '#b91c1c'; }}
        onMouseLeave={e => { if (!disabled) e.currentTarget.style.backgroundColor = '#ef4444'; }}
        disabled={disabled}
        className={className}
      >
      {children}
    </button>
  );
};
export default Button;
