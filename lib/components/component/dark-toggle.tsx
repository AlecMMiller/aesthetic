import { Moon, Sun } from 'lucide-react'
import { Button } from '../primitive'
import { useTheme } from './wrapper'

export function DarkModeToggle (): JSX.Element {
  const { theme, setTheme } = useTheme()

  const icon = theme === 'dark' ? <Moon /> : <Sun />

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
