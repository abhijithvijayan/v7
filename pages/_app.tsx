/**
 *  v7
 *
 *  @author abhijithvijayan <abhijithvijayan.in>
 */

import 'emoji-log';
import {AppProps} from 'next/app';
import * as React from 'react';
import Head from 'next/head';

// common styles
import '../styles/main.scss';

import {SiteProps} from '../config';

function App({Component, pageProps}: AppProps): JSX.Element {
  React.useLayoutEffect(() => {
    // eslint-disable-next-line no-console
    console.emoji('🦄', "Wouldn't you like to know!");
  }, []);

  return (
    <>
      <Head>
        {/* See: https://git.io/Jfnla */}
        <title>{SiteProps.Title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta name="application-name" content={SiteProps.Name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SiteProps.Name} />
        <meta name="description" content={SiteProps.Description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={SiteProps.TileColor} />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={SiteProps.TileColor} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={SiteProps.URL} />
        <meta name="twitter:title" content={SiteProps.Name} />
        <meta name="twitter:description" content={SiteProps.Description} />
        <meta
          name="twitter:image"
          content={`${SiteProps.URL}${SiteProps.Icon192}`}
        />
        <meta name="twitter:creator" content={SiteProps.Username} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={SiteProps.Name} />
        <meta property="og:description" content={SiteProps.Description} />
        <meta property="og:site_name" content={SiteProps.Name} />
        <meta property="og:url" content={SiteProps.URL} />
        <meta property="og:image" content={SiteProps.Thumbnail} />

        <meta name="author" content={SiteProps.Name} />
        <meta name="keywords" content={SiteProps.Keywords} />
        <meta name="copyright" content={SiteProps.Name} />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="creator" content={SiteProps.Name} />

        <link rel="apple-touch-icon" sizes="192x192" href={SiteProps.Icon192} />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href={SiteProps.Icon72}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={SiteProps.Icon96}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href={SiteProps.Favicon} color="#5bbad5" />
        <link rel="shortcut icon" href={SiteProps.Favicon} />

        <meta itemProp="name" content={SiteProps.Name} />
        <meta itemProp="image" content={SiteProps.Thumbnail} />
        <meta itemProp="keywords" content={SiteProps.Keywords} />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default App;
