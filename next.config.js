const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

module.exports = withMDX({
  reactStrictMode: true,
  images: { loader: 'custom' },
  pageExtensions: [
    "tsx",
    "md",
    "mdx"
  ]
})
