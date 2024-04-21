import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

function Container (props: ContainerProps): JSX.Element {
  const className = 'bg-slate-4 rounded-xl' + (props.className !== undefined ? ` ${props.className}` : '')

  return <div className={className}>{props.children}</div>
}

export { Container }
