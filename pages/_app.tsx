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
      &copy; 2007-2022&nbsp;
      <a
        href="https://zfben.com"
        className='text-gray-600'>Zfben.com</a>
        &nbsp;All Rights Reserved.
    </div>
    {/* <Script id='mcjs'>{'!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/38584a031e9e2f3f5cef06d4f/e70f6adde0a9d7d413e03e78a.js")'}</Script> */}
  </>
}

export default MyApp
