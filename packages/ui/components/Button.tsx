import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100',
        secondary: 'bg-gray-100 text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
        outline: 'border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black',
        ghost: 'hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 