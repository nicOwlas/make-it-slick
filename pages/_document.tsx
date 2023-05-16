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
          <title>Make it Slick | Modernize Your Business Processes</title>
          <meta
            name="description"
            content="Transform your business with Make it Slick. We help traditional organizations become more efficient by automating old methods and processes using state-of-the-art SaaS tools."
          />
          <meta
            name="keywords"
            content="Business Modernization, Process Automation, SaaS Tools, Low Code, No Code, Make it Slick, Traditional to Modern"
          />
          <meta
            property="og:title"
            content="Make it Slick | Modernize Your Business Processes"
          />
          <meta
            property="og:description"
            content="Transform your business with Make it Slick. We help traditional organizations become more efficient by automating old methods and processes using state-of-the-art SaaS tools."
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/nicOwlas/make-it-slick/main/public/og_image.jpeg"
          />
          <meta property="og:url" content="https://www.makeitslick.com" />
          <meta name="twitter:card" content="summary_large_image" />
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
