import GreetingSection from '@/components/GreetingSection';
import VerticalBar from '@/components/VerticalBar';
import ScrollSection from '@/components/ScrollSection';
import Frame from '@/components/Frame';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BackgroundImage from '@/components/BackgroundImage';
import DotPlain from '@/components/DotPlain';

export default function Home() {
  return (
    <>
      <VerticalBar />
      <Frame />
      {/* <BackgroundImage /> */}
      <Header />
      <Footer />
      <DotPlain />
      <div className='mx-auto flex max-w-7xl flex-col gap-12 px-12 lg:flex-row lg:py-0 2xl:px-14'>
        <GreetingSection />
        <ScrollSection />
      </div>
    </>
  );
}
