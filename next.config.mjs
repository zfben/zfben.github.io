import remarkGFM from 'remark-gfm'
import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGFM] }
})

export default withMDX({
  reactStrictMode: true,
  images: { loader: 'custom' },
  pageExtensions: [
    'tsx',
    'md',
    'mdx'
  ]
})
