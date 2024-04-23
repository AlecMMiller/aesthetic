import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Toaster } from '../primitive'

interface WrapperProps {
  children: React.ReactNode
}

type Theme = 'dark' | 'light'

interface ThemeContextFormat {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextFormat>(
  {
    theme: 'dark',
    setTheme: () => {}
  }
)

export function useTheme (): ThemeContextFormat {
  return useContext(ThemeContext)
}

function applyTheme (theme: Theme): void {
  const root = document.documentElement

  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function Wrapper (props: WrapperProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('dark')
  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={value}>
      <div className='w-full min-h-screen bg-slate-1'>
        {props.children}
        <Toaster />
      </div>
    </ThemeContext.Provider>
  )
}
