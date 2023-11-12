// Components
// Utilities
import { ReactNode } from 'react'

// Hooks
// Styles
// Interfaces

export interface ButtonTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function ButtonText({ children, ...res }: ButtonTextProps) {
  return <span {...res}>{children}</span>
}
