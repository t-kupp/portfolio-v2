import '@/styles/globals.css';
import TechStackProvider from '@/context/techStackContext';
import ProjectProvider from '@/context/projectsContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProjectProvider>
        <TechStackProvider>
          <Component {...pageProps} />
        </TechStackProvider>
      </ProjectProvider>
    </>
  );
}
