/* eslint-disable react/prop-types */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const posts = [
  {
    title: '一款可终生使用的笔记软件，需要有哪些特点？',
    date: '2022-03-20',
  },
  {
    title: '战争与和平',
    date: '2022-03-05',
  },
  {
    title: '你的人生观取向是什么？',
    date: '2022-02-06',
  },
  {
    title: '拜年及汇报今年年度目标的进展',
    date: '2022-02-01'
  }
]

const Page: NextPage = () => {
  return <div className='max-w-md mx-auto p-4'>
    <Head>
      <title>Blog | 寂静小站 Silence Space</title>
    </Head>
    <h1 className='font-bold'>Blog</h1>
    <ul className='my-2 list-disc list-inside'>
      {posts.map(post => <li key={ post.date }>
        <Link href={ `/blog/${post.date}` }><a>
          <span className='hover:underline'>{post.title}</span>
          <span className='text-gray-400 pl-2'>{post.date}</span>
        </a>
        </Link>
      </li>)}
    </ul>
  </div>
}

export default Page
