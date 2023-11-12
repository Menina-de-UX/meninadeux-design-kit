// Components
// Utilities
// Hooks
// Styles
// Interfaces
import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonIconProps {
  children: ReactNode
}

export function ButtonIcon({ children }: ButtonIconProps) {
  return <Slot className="w-5 h-5">{children}</Slot>
}
