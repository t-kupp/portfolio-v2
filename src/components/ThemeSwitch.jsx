import { ThemeContext } from '@/context/themeContext';
import { useContext, useEffect } from 'react';

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);
  const appliedTheme = theme || 'light'; // Fallback to 'light' if empty

  useEffect(() => {
    if (!appliedTheme) return; // Prevents adding an empty class

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(appliedTheme);

    // Applying custom CSS in dark mode
    if (appliedTheme === 'dark') {
      document.documentElement.style.setProperty('--rt-color-dark', 'var(--myLight)');
      document.documentElement.style.setProperty('--rt-color-white', 'var(--myDarker)');
    } else {
      document.documentElement.style.setProperty('--rt-color-dark', 'var(--myDark)');
      document.documentElement.style.setProperty('--rt-color-white', 'var(--myLight)');
    }
  }, [appliedTheme]);

  function toggleTheme() {
    setTheme(appliedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div>
      <button
        className='text-description flex items-center gap-2 text-sm uppercase opacity-100'
        onClick={toggleTheme}
      >
        <div className='flex items-center'>
          {appliedTheme === 'dark' ? '□' : '■'}
          Light
        </div>
        <div className='flex items-center'>
          {appliedTheme === 'light' ? '□' : '■'}
          Dark
        </div>
      </button>
    </div>
  );
}
