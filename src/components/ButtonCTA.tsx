import React from 'react';

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export default function ButtonCTA({ href, variant = 'primary', children, className, ...props }: ButtonCTAProps) {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block cursor-pointer";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className || ''}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}