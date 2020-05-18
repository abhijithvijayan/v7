/**
 *  v7
 *
 *  @author abhijithvijayan <abhijithvijayan.in>
 */

import {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'styled-components';

// common styles
import '../styles/main.scss';

// ToDo: types
// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-webpack-loader-syntax, import/no-unresolved
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/base/_variables.scss'); // extract sass variables

export interface Theme {
  [key: string]: string;
}

function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        {/* See: https://git.io/Jfnla */}
        <title>Abhijith Vijayan | Engineer & Developer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
