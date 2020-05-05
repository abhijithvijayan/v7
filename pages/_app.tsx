import {AppProps} from 'next/app';

import '../styles/main.scss';

function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
