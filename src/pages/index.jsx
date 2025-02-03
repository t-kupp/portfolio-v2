import GreetingSection from '@/components/GreetingSection';
import VerticalHeader from '@/components/VerticalHeader';
import ScrollSection from '@/components/ScrollSection';
import Footer from '@/components/Footer';
import Frame from '@/components/Frame';

export default function Home() {
  return (
    <>
      <VerticalHeader />
      <Footer />
      <Frame />
      <div className='mx-auto flex max-w-7xl gap-4 pl-16 pr-12'>
        <GreetingSection />
        <ScrollSection />
      </div>
    </>
  );
}
