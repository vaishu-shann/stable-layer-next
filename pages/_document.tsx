import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class StyleDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    // You can fetch the dynamic logo here, e.g., using an API or server-side logic
    const dynamicLogoUrl =
      "https://gateway.pinata.cloud/ipfs/QmWyRX78hzFHK3fbyVpFmWEBXSsBAcoYr9uNQ4nsuKRrSs?_gl=1*ogasyy*_ga*MTQyNTA5NTc2MC4xNjkwOTc2ODQ1*_ga_5RMPXG14TE*MTY5MDk4MDI0My4yLjEuMTY5MDk4MDQ2MS42MC4wLjA";
    return { ...initialProps, dynamicLogoUrl };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
