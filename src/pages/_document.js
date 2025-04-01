import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='bg-myLight text-myDark antialiased transition-colors duration-500 dark:bg-myDarker dark:text-myLight'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
