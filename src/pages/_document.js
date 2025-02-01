import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className="uppercase antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
