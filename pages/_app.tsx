import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp ({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"></meta>
    </Head>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-0WNKPPDJC9"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive">{'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",\'G-0WNKPPDJC9\')'}</Script>
    <Component { ...pageProps } />
  </>
}

export default MyApp
