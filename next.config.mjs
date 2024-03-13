import remarkGFM from 'remark-gfm'
import mdx from '@next/mdx'
import { visit, SKIP } from 'unist-util-visit'

function link() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type === 'link' && !node.data?.hProperties?.target) {
        if (node.url) {
          parent.children[index] = {
            type: 'link',
            url: node.url,
            title: node.title,
            children: node.children,
            data: { hProperties: { target: node.url.startsWith('/') ? null : '_blank', } }
          }
          return [SKIP, index]
        }
      }
    })
  }
}

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGFM, link] }
})

export default withMDX({
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['']
  },
  pageExtensions: [
    'tsx',
    'md',
    'mdx'
  ]
})
