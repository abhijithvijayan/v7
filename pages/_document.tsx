import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): ReturnType<typeof ctx.renderPage> =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props): JSX.Element => (
            <>
              <App {...props} />
            </>
          ),
          // useful for wrapping in a per-page basis
          // eslint-disable-next-line react/display-name
          enhanceComponent: (Component) => (props): JSX.Element => (
            <>
              <Component {...props} />
            </>
          ),
        });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
      };
    } finally {
      //
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
