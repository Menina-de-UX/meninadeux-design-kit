// Components
import { Slot } from '@radix-ui/react-slot'

// Utilities
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

// Hooks
// Styles
// Interfaces

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
  children: ReactNode
}

const button = tv({
  base: [
    'min-w-28 min-h-10 px-7 py-2 flex justify-center items-center gap-2 font-avenir font-normal text-md rounded-xl cursor-pointer',
  ],
  variants: {
    variant: {
      ghost: 'bg-gray-200 text-gray-500 cursor-none',
      primary:
        'bg-blue-300 border border-blue-300  text-white hover:bg-transparent hover:text-blue-300 hover:font-medium',
      outline:
        'bg-fuzzy border border-fuzzy text-white hover:bg-transparent hover:text-fuzzy  hover:font-medium',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function ButtonRoot({
  children,
  asChild,
  variant,
  className,
  ...res
}: ButtonRootProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      {...res}
      disabled={variant === 'ghost'}
      className={button({ variant, className })}
    >
      {children}
    </Component>
  )
}
