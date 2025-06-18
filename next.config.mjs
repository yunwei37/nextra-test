import nextra from 'nextra'

const withNextra = nextra({
  // Add Nextra-specific options here if needed
})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add any other Next.js configuration options here
}) 