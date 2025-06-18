import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'My Project',
  description: 'Documentation site built with Nextra',
}

const banner = <Banner storageKey="nextra-banner">🎉 Welcome to my documentation!</Banner>
const navbar = (
  <Navbar
    logo={<span>My Project</span>}
    projectLink="https://github.com/shuding/nextra-docs-template"
    chatLink="https://discord.com"
  />
)
const footer = <Footer>Nextra Docs Template</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        {/* Additional head tags can be added here */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra-docs-template"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
} 