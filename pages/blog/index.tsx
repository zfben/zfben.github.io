/* eslint-disable react/prop-types */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const posts = [
  {
    title: '新春快乐',
    date: '2022-02-01'
  }
]

const Page: NextPage = () => {
  return <div className='max-w-md mx-auto p-4'>
    <Head>
      <title>Blog | 寂静小站 Silence Space</title>
    </Head>
    <h1 className='font-bold'>Blog</h1>
    <ul className='my-2'>
      {posts.map(post => <li key={ post.date }>
        <Link href={ `/blog/${post.date}` }><a>
          {post.title}
          <span className='text-gray-400 pl-2'>{post.date}</span>
        </a>
        </Link>
      </li>)}
    </ul>
    <div className="footer">
      &copy; 2007-2022&nbsp;
      <a href="http://zfben.com">Zfben.com</a>
        &nbsp;All Rights Reserved.
    </div>
  </div>
}

export default Page
