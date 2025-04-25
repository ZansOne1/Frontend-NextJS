import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-md cursor-pointer',
    {
        variants: {
            variant: {
                default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
                outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
                destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
                ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
                warning: 'bg-amber-400 hover:bg-gray-100 text-gray-800',
                green: 'bg-green-600 hover:bg-gray-100 text-gray-800',
            },
            size: {
                sm: 'h-8 px-3',
                md: 'h-10 px-4',
                lg: 'h-12 px-6',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
