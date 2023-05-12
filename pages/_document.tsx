// pages/_document.tsx

import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import theme from "../theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1BQT3B3ZB1"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BQT3B3ZB1');
            `}
          </Script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
