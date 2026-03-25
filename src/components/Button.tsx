

import React from 'react';
import type { FC, ReactNode } from 'react';


interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`ui-py-2 ui-px-4 ui-rounded ui-bg-red-600 ui-text-white ui-border-none ui-font-semibold ui-transition-colors ui-duration-200
      hover:ui-bg-red-800
      disabled:ui-bg-red-300 disabled:ui-cursor-not-allowed
      ${className}`}
  >
    {children}
  </button>
);
export default Button;
/// <reference types="react" />
