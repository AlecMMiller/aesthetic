import { createContext, useContext } from 'react'
import { Toaster } from '../primitive'

interface WrapperProps {
  children: React.ReactNode
}

type Theme = 'dark' | 'light'

const ThemeContext = createContext<Theme>('dark')

function useTheme (): void {
  const theme = useContext(ThemeContext)

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function Wrapper (props: WrapperProps): JSX.Element {
  useTheme()
  return (
    <div className='w-full h-min-screen bg-slate-1'>
      {props.children}
      <Toaster />
    </div>
  )
}
