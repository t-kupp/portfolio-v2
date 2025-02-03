import ThemeSwitch from '@/components/ThemeSwitch';
import { PiCopyrightThin } from 'react-icons/pi';

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-6 z-50 flex items-center gap-2 p-2 text-sm font-light tracking-tight opacity-100 2xl:left-7 2xl:p-3'>
      <ThemeSwitch />
      <Copyright />
    </div>
  );
}

function Copyright() {
  return (
    <div className='flex items-center gap-1'>
      ©<span className='text-spaced text-sm'>2025</span>Jan-Thorge Kupper
    </div>
  );
}
