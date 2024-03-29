/* eslint-disable react/prop-types */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'

const posts = [
  {
    title: '如何应对互联网媒体对自己的影响？',
    date: '2022-06-25',
  },
  {
    title: '用觉察解决大脑的问题',
    date: '2022-06-08',
  },
  {
    title: '我常用的读书软件',
    date: '2022-05-29',
  },
  {
    title: '瞬息全宇宙：Can we stop fighting?',
    date: '2022-05-21',
  },
  {
    title: '一人企业：增长不是唯一的商业路径',
    date: '2022-04-29',
  },
  {
    title: '聊聊财务健康',
    date: '2022-03-28',
  },
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

export const getStaticProps = async () => {
  const feed = new Feed({
    id: 'https://zfben.com/blog',
    title: 'Ben\'s Blog',
    link: 'https://zfben.com/blog',
    copyright: 'Zfben.com All Rights Reserved.'
  })

  posts.forEach(p => feed.addItem({
    title: p.title,
    id: `https://zfben.com/blog/${p.date}`,
    link: `https://zfben.com/blog/${p.date}`,
    date: new Date(p.date),
    content: `Please read the article at <a href="https://zfben.com/blog/${p.date}">https://zfben.com/blog/${p.date}</a>`
  }))

  writeFileSync('public/blog.rss.xml', feed.rss2())

  return { props: {} }
}

const Page: NextPage = () => {
  return <div className='max-w-md mx-auto p-4'>
    <Head>
      <title>Ben&apos;s Blog</title>
    </Head>
    <h1 className='font-bold'>
      Blog
      <Link href='/blog.rss.xml'><a className='font-thin ml-2'>RSS</a></Link>
    </h1>
    <ul className='my-2 list-disc list-inside'>
      {posts.map(post => <li key={ post.date }>
        <Link
          href={ `/blog/${post.date}` }
          passHref
        >
          <a>
            <span className='hover:underline'>{post.title}</span>
            <span className='text-gray-400 pl-2'>{post.date}</span>
          </a>
        </Link>
      </li>)}
    </ul>
  </div>
}

export default Page
