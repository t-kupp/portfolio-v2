import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="m-8 border border-[--foreground] p-8 uppercase antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
