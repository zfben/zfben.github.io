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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
