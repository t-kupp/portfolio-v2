import GreetingSection from '@/components/GreetingSection';
import VerticalBar from '@/components/VerticalBar';
import ScrollSection from '@/components/ScrollSection';
import Frame from '@/components/Frame';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BackgroundImage from '@/components/BackgroundImage';

export default function Home() {
  return (
    <>
      <VerticalBar />
      <Frame />
      <BackgroundImage />
      <Header />
      <Footer />
      <div className='mx-auto flex max-w-7xl flex-col gap-12 px-8 lg:flex-row 2xl:px-10'>
        <GreetingSection />
        <ScrollSection />
      </div>
    </>
  );
}
