import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/fav.png" />
      </Head>
      <body className="bg-gray-50 dark:bg-gray-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
