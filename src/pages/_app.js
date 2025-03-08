import '@/styles/globals.css';
import TechStackProvider from '@/context/techStackContext';
import ProjectProvider from '@/context/projectsContext';
import ThemeProvider from '@/context/themeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProjectProvider>
        <TechStackProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </TechStackProvider>
      </ProjectProvider>
    </>
  );
}
