'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shimmer?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      shimmer = false,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

    const variants = {
      primary: 'bg-primary-gradient text-white hover:scale-[1.02] hover:brightness-125 active:scale-[0.98] active:brightness-100 transition-all duration-300 opacity-90',
      secondary: 'border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] opacity-80',
      ghost: 'text-muted hover:text-primary-gradient hover:bg-gradient-primary/5',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3 text-base',
    };

    const content = (
      <>
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        <span className="relative z-10">{children}</span>
        {rightIcon && !isLoading && <span className="ml-2 relative z-10">{rightIcon}</span>}
        
        {/* Shimmer effect */}
        {shimmer && (
          <>
            {/* Main shimmer stripe */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                width: '80%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 70%, transparent 100%)',
                filter: 'blur(12px)',
              }}
              animate={{
                left: ['-80%', '180%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
            />
            {/* Secondary glow layer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.05) 60%, transparent 100%)',
                filter: 'blur(20px)',
              }}
              animate={{
                left: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
            />
          </>
        )}
      </>
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className,
          (children as React.ReactElement<any>).props.className
        ),
        children: content,
      });
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
