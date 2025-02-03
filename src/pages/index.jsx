import GreetingSection from '@/components/GreetingSection';
import VerticalHeader from '@/components/VerticalHeader';
import ThemeSwitch from '@/components/ThemeSwitch';
import ScrollSection from '@/components/ScrollSection';

export default function Home() {
  return (
    <>
      <VerticalHeader />
      <ThemeSwitch />
      <div className='mx-auto flex max-w-7xl gap-4 pl-16 pr-12'>
        <GreetingSection />
        <ScrollSection />
      </div>
    </>
  );
}
