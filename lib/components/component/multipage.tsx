import { Container } from '../primitive/container'
import React from 'react'
import { Dot, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '../primitive'

interface MultiPageProps {
  children: React.ReactNode
  currentPage: number
  pages: number
  canGoBack?: boolean
  canGoForward?: boolean
  onBack?: () => void
  onForward?: () => void
  className?: string
}

function MultiPage (props: MultiPageProps): JSX.Element {
  const dots = Array.from({ length: props.pages }, (_, i) => {
    const className = i === props.currentPage ? 'text-blue-9' : 'text-slate-9'
    return <Dot key={i} size={42} className={className} />
  })

  const className = 'flex flex-col items-center' + (props.className !== undefined ? ` ${props.className}` : '')

  return (
    <div className={className}>
      <div className='flex items-center'>
        <Button variant='ghost' disabled={props.canGoBack !== true} className='text-slate-11 hover:text-slate-12' onClick={props.onBack} aria-label='back'>
          <ChevronLeft size={32} />
        </Button>
        <Container className='shadow-xl'>
          {props.children}
        </Container>
        <Button variant='ghost' disabled={props.canGoForward !== true} className='text-slate-11 hover:text-slate-12' onClick={props.onForward} aria-label='forward'>
          <ChevronRight size={32} />
        </Button>
      </div>
      <div className='flex'>
        {dots}
      </div>
    </div>
  )
}

export { MultiPage }
