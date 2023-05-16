'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher: React.FC = () => {

  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

//   const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value='system'>System</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
    </select>
  )
}

export default ThemeSwitcher