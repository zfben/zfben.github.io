import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { styles } from './home.styles'

const Page: NextPage = () => {
  return (
    <div className='home en'>
      <style jsx>{styles}</style>
      <Head>
        <title>你好，我是朱峰</title>
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0， minimal-ui"
          name="viewport"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://zfben.com/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://zfben.com/fr"
        />
      </Head>
      <div className="avatar">
        <Image
          src={ require('../public/header.jpg') }
          loader={ ({ src }) => src }
          alt="Avatar"
        />
      </div>
      <h1>你好，我是朱峰</h1>
      <div>一名在上海的全栈工程师</div>
      <div className="links">
        <Link href="/blog">博客</Link>
      </div>
      <div className="social">
        <a href="https://twitter.com/zfben">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://github.com/zfben">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/zhu-feng">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <div className="contact">
        <a href="mailto:ben@zfben.com">联系我</a>
      </div>
      <div className="lang">
        <Link
          href="/">English</Link>
        <Link
          href="/fr">Français</Link>
      </div>
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  ctx.locale = 'zh'
  return {}
}

export default Page
