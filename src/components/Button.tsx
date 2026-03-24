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
      className={`${className}`}
      disabled={disabled}
      style={{padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#3b82f6', color: '#ffffff', transition: 'background-color 0.3s' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
    >
      {children}
    </button>
  );
};
export default Button;
