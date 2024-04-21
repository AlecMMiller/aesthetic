import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      rounding: {
        default: 'rounded-md',
        full: 'rounded-full'
      },
      variant: {
        default: 'bg-slate-9 text-slate-12 hover:bg-slate-10 active:bg-slate-11',
        destructive:
          'bg-red-9 text-slate-12 hover:bg-red-10 active:bg-red-11',
        outline:
          'border border-input border-slate-7 bg-slate-3 hover:bg-accent-slate-4 active:bg-slate-5 text-slate-11 hover:text-slate-12',
        secondary:
          'bg-blue-9 text-secondary-foreground hover:bg-blue-10 active:bg-blue-11',
        ghost: 'hover:bg-blue-3 hover:text-slate-12 text-slate-11',
        link: 'text-slate-12 underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      rounding: 'default',
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, rounding, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
