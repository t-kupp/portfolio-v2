import ContactIcons from './ContactIcons';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <div className='fixed bottom-0 z-50 flex h-8 w-full items-center justify-between px-8 2xl:h-[40px] 2xl:px-[38px]'>
      <ContactIcons />
      <Copyright />
    </div>
  );
}
