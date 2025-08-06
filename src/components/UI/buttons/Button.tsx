import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/80 focus:ring-primary',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-2 text-base rounded-full',
    lg: 'px-8 py-3 text-lg rounded-full',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Default right arrow icon
  const defaultIcon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
  
  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && (icon || defaultIcon)}
    </>
  );
  
  // If href is provided, render as Link/anchor
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {content}
    </button>
  );
};

export default Button;
