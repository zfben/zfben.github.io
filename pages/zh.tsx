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
          src='/header.jpg'
          alt="Avatar"
          width={ 400 }
          height={ 400 }
          loader={ ({ src }) => src }
        />
      </div>
      <h1>你好，我是朱峰</h1>
      <div>一名自由职业者和全栈工程师</div>
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
        <a href="https://zfben.ck.page/55d011b3cc">立即订阅我的项目更新</a>
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
