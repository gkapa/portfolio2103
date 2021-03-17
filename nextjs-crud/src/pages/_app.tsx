import React from "react";
import Head from "next/head";
import "styles/static/normalize.css";
import "styles/globalStyle.css";
import "styles/fonts.css";

// npx serverless
import { Amplify } from "aws-amplify";
import awsExports from "aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

// Redux stuff
import { Provider } from "react-redux";
import { store } from "store";

import Layout from "layouts/Layout";

export default function MyApp({ Component, pageProps, user }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}
