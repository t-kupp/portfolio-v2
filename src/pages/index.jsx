import GreetingSection from '@/components/GreetingSection';
import VerticalHeader from '@/components/VerticalHeader';
import ThemeSwitch from '@/components/ThemeSwitch';
import ScrollSection from '@/components/ScrollSection';

export default function Home() {
  return (
    <div className='flex h-screen w-screen bg-myLight p-8 text-myDark transition-colors duration-500 dark:bg-myDarker dark:text-myLight'>
      <VerticalHeader />
      <div className='relative mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-4 p-12'>
        <ThemeSwitch />
        <GreetingSection />
        <ScrollSection />
      </div>
    </div>
  );
}
