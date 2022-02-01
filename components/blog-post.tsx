import Head from 'next/head'

export default function BlogPost ({ children, meta }: {
  children: React.ReactNode
  meta: {
    title: string
    date: string
  }
}) {
  return <div className='max-w-md mx-auto p-4'>
    <Head>
      <title>{meta.title} | Blog | 寂静小站 Silence Space</title>
    </Head>
    <h1 className='font-bold'>{meta.title}</h1>
    <div className='text-gray-400 text-sm'>{meta.date}</div>
    <article className='my-4 space-y-2 text-sm blog-post'>{children}</article>
  </div>
}
