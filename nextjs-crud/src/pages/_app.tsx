import React from "react";
import Head from "next/head";
import "styles/static/normalize.css";
import "styles/globalStyle.css";
import "styles/fonts.css";

// npx serverless
import { Amplify } from "aws-amplify";
import awsExports from "aws-exports";
Amplify.configure({ ...awsExports, ssr: true });
import checkUser from "pages/api/checkUser";

// Redux stuff
import { Provider, useDispatch } from "react-redux";
import { store, authActions } from "store";

import Layout from "layouts/Layout";

export default function MyApp({ Component, pageProps }) {
  const user = checkUser();

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    if (!user) return;
    store.dispatch(
      authActions.setAuth({
        username: user.username,
        email: user.attributes.email,
      }),
    );
  }, [user]);

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
