import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  level?: 'default' | 'over'
  className?: string
}

function Container (props: ContainerProps): JSX.Element {
  const bg = props.level === 'over' ? 'bg-slate-3' : 'bg-slate-2'
  const className = `rounded-xl ${bg} ${props.className ?? ''}`

  return <div className={className}>{props.children}</div>
}

export { Container }
