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
        <title>寂静小站 Silence Space</title>
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0， minimal-ui"
          name="viewport"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="avatar">
        <Image
          src={ require('../public/header.jpg') }
          loader={ ({ src }) => src }
          alt="Avatar"
        />
      </div>
      <h1>Bonjour, Je m&#39;appelle Ben.</h1>
      <div>Un développeur complète de la pile à Shanghai, en Chine.</div>
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
        <a href="mailto:ben@zfben.com">Contactez-moi</a>
      </div>
      <div className="lang">
        <Link
          href="/">English</Link>
        <Link
          href="/zh">中文</Link>
      </div>
      <div className="footer">
        &copy; 2007-2022&nbsp;
        <a href="http://zfben.com">Zfben.com</a>
        &nbsp;All Rights Reserved.
      </div>
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  ctx.locale = 'fr'
  return {}
}


export default Page
