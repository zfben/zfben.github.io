import Document, {
  Html, Head, Main, NextScript, DocumentContext
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    if (!ctx.locale) ctx.locale = 'en'

    return {
      ...initialProps,
      locale: ctx.locale
    }
  }

  render () {
    return (
      <Html lang={ this.props.locale }>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
          />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0049636498302507" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
