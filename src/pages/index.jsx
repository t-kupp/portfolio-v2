import GreetingSection from '@/components/GreetingSection';
import VerticalHeader from '@/components/VerticalHeader';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <div className="bg-myLight text-myDark dark:text-myLight dark:bg-myDarker flex h-screen w-screen p-8 transition-colors duration-500">
      <VerticalHeader />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-4 p-12">
        <ThemeSwitch />
        <GreetingSection />
      </div>
    </div>
  );
}
