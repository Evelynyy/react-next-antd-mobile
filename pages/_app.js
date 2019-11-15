import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export default class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale, messages };
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache,
    );

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          <style global jsx>{`
            html,
            body {
              font-family: 'Helvetica Neue', 'Hiragino Sans GB', Helvetica,
                'Microsoft YaHei', Arial;
              margin: 0;
            }
          `}</style>
        </Head>

        <RawIntlProvider value={intl}>
          <Component {...pageProps} />
        </RawIntlProvider>
      </>
    );
  }
}
