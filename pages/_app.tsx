import React, { useState, useEffect } from "react";
import Layout from "../app-components/layout";
import "../styles/buy.css"
import "../styles/dashboard.css"
import "../styles/earn.css"
import "../styles/global.css"
import "../styles/lockEna.css"
import "../styles/navbar.css"
import "../styles/portfolio.css"
import "../styles/portfolioLock.css"
import "../styles/sEna.css"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThirdwebProvider } from "thirdweb/react";

const queryClient = new QueryClient();

function App({ Component, pageProps }: any) {
  const [client] = useState(() => queryClient);
  return (
    <>
     <ThirdwebProvider>
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
      </ThirdwebProvider>
    </>
  );
}

export default App;
