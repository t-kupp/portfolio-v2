import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <div className='fixed top-0 z-50 flex h-5 w-full items-center justify-between px-5 lg:h-[40px] lg:px-[38px]'>
      <ThemeSwitch />
    </div>
  );
}
