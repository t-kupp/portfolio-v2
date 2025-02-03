import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(sysTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    // applying custom css in dark mode
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--rt-color-dark', 'var(--myLight)');
      document.documentElement.style.setProperty('--rt-color-white', 'var(--myDarker)');
    } else {
      document.documentElement.style.setProperty('--rt-color-dark', 'var(--myDark)');
      document.documentElement.style.setProperty('--rt-color-white', 'var(--myLight)');
    }
  }, [theme]);

  function toggleTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div>
      <button
        className='text-description flex items-center gap-2 text-sm uppercase opacity-100'
        onClick={toggleTheme}
      >
        <div className='flex items-center'>
          {theme === 'dark' ? '□' : '■'}
          Light
        </div>
        <div className='flex items-center'>
          {theme === 'light' ? '□' : '■'}
          Dark
        </div>
      </button>
    </div>
  );
}
