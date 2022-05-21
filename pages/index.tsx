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
        <title>Hi, I&apos;m Ben.</title>
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
          hrefLang="zh"
          href="https://zfben.com/zh"
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
          unoptimized
          alt="Avatar"
        />
      </div>
      <h1>Hi, I&#39;m Ben.</h1>
      <div>A full stack developer in Shanghai, China.</div>
      <div className="links">
        <Link href="/blog">Blog</Link>
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
        <a href="mailto:ben@zfben.com">Contact Me</a>
      </div>
      <div className="lang">
        <Link
          href="/zh">中文</Link>
        <Link
          href="/fr">Français</Link>
      </div>
    </div>
  )
}

export default Page
