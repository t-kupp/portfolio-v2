import '@/styles/globals.css';
import TechStackProvider from '@/context/techStackContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TechStackProvider>
        <Component {...pageProps} />
      </TechStackProvider>
    </>
  );
}
