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
    <div
      className='w-full'
      style={ { minHeight: 'calc(100vh - 2rem)' } }>
      <Component { ...pageProps } />
    </div>
    <div className="text-xs text-gray-400 text-center">
      &copy; 2007-2024&nbsp;
      <a
        href="https://zfben.com"
        className='text-gray-600'>Zfben.com</a>
        &nbsp;All Rights Reserved.
    </div>
    <Script async data-uid="55d011b3cc" src="https://zfben.ck.page/55d011b3cc/index.js"></Script>
  </>
}

export default MyApp
