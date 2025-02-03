import GreetingSection from '@/components/GreetingSection';
import VerticalBar from '@/components/VerticalBar';
import ScrollSection from '@/components/ScrollSection';
import Frame from '@/components/Frame';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <VerticalBar />
      <Frame />
      <Header />
      <Footer />
      <div className='mx-auto flex max-w-7xl gap-4 pl-16 pr-12'>
        <GreetingSection />
        <ScrollSection />
      </div>
    </>
  );
}
