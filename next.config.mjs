import nextra from 'nextra'

const withNextra = nextra({
  // Add Nextra-specific options here if needed
})

// Use basePath for GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGitHubPages ? '/nextra-test' : ''

export default withNextra({
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  // Add any other Next.js configuration options here
}) 