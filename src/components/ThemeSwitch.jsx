import { RiCheckboxBlankLine, RiCheckboxBlankFill } from 'react-icons/ri';
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
  }, [theme]);

  function toggleTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <div>
      <button className='flex items-center gap-2 uppercase' onClick={toggleTheme}>
        <div className='flex items-center'>
          {theme === 'dark' ? (
            <RiCheckboxBlankLine className='mt-[2px]' />
          ) : (
            <RiCheckboxBlankFill className='mt-[2px]' />
          )}
          Light
        </div>
        <div className='flex items-center'>
          {theme === 'light' ? (
            <RiCheckboxBlankLine className='mt-[2px]' />
          ) : (
            <RiCheckboxBlankFill className='mt-[2px]' />
          )}
          Dark
        </div>
      </button>
    </div>
  );
}
