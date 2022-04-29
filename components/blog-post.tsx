import Head from 'next/head'

export default function BlogPost ({ children, meta }: {
  children: React.ReactNode
  meta: {
    title: string
    date: string
  }
}) {
  return <div className='mx-auto p-4'>
    <Head>
      <title>{meta.title} | Blog | 寂静小站 Silence Space</title>
      <meta
        property="og:title"
        content={ meta.title }
      />
      <meta
        property="og:type"
        content="article" />
      <meta
        property="og:url"
        content={ 'https://zfben.com/blog/' + meta.date } />
      <meta
        property='og:image'
        content='https://zfben.com/_next/static/media/header.cd14aab7.jpg'
      />
    </Head>
    <h1 className='font-bold'>{meta.title}</h1>
    <div className='text-gray-400 text-sm'>{meta.date}</div>
    <article className='my-4 space-y-2 text-sm blog-post leading-8'>
      <style jsx>{`
    article :global(h2) {
      font-size: 1rem;
      padding: 0.5rem 0;
    }
    article :global(h2), :global(h3) {
      font-weight: bold;
    }
    article :global(table) {
      box-shadow: 0 1px 2px 0 rgb(0 0 0/0.05);
    }
    article :global(th), :global(td) {
      padding: 0.2rem 0.5rem;
      border: 1px solid #e5e7eb;
    }
    article :global(th) {
      background-color: rgb(229, 231, 235);
      font-weight: normal;
    }
    article :global(a) {
      color: #3b82f6;
    }
    article :global(a:hover) {
      text-decoration: underline;
    }
    `}</style>
      {children}
    </article>
  </div>
}
