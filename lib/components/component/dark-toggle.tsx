import { Moon, Sun } from 'lucide-react'
import { Button } from '../primitive'
import { useTheme } from './wrapper'

interface DarkModeToggleProps {
  size?: number
}

export function DarkModeToggle (props: DarkModeToggleProps): JSX.Element {
  const { theme, setTheme } = useTheme()

  const icon = theme === 'dark' ? <Moon size={props.size} /> : <Sun size={props.size} />

  return (
    <Button
      className='text-slate-12' size='icon' rounding='full' variant='ghost' onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {icon}
    </Button>
  )
}
