# Nextra Docs Template 

This is a template for creating documentation with [Nextra](https://nextra.site) that can be deployed to GitHub Pages.

[**Live Demo →**](https://nextra-docs-template.vercel.app)

[![](.github/screenshot.png)](https://nextra-docs-template.vercel.app)

## Quick Start

Click the button to clone this repository and deploy it on Vercel:

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fshuding%2Fnextra-docs-template&showOptionalTeamCreation=false)

## Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

## Static Export and GitHub Pages Deployment

This template is configured to export static HTML files and deploy to GitHub Pages using GitHub Actions.

### Configuration

The project includes:

- **Static Export Configuration**: `next.config.mjs` is configured with `output: 'export'` and dynamic `basePath` for GitHub Pages
- **GitHub Actions Workflow**: `.github/workflows/deploy.yml` automatically builds and deploys to GitHub Pages
- **Jekyll Bypass**: `.nojekyll` file in `/public` to disable Jekyll processing

### Deploy to GitHub Pages

1. **Fork or clone this repository**

2. **Update the repository name** in `next.config.mjs`:
   ```javascript
   const basePath = isGitHubPages ? '/your-repository-name' : ''
   ```
   Replace `'nextra-test'` with your actual repository name.

3. **Enable GitHub Pages**:
   - Go to your repository's **Settings** tab
   - Click **Pages** in the sidebar
   - Under **Build and deployment**, select **GitHub Actions** as the source

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Automatic Deployment**: The GitHub Action will automatically:
   - Install dependencies using pnpm
   - Build the static site
   - Deploy to GitHub Pages

Your site will be available at: `https://your-username.github.io/your-repository-name/`

### Manual Local Testing

To test the static export locally:

```bash
# Build for production
pnpm build

# Serve the static files (optional)
cd out && python3 -m http.server 8000
```

Visit `http://localhost:8000` to view the static site.

### GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) includes:

- **Node.js 20** and **pnpm 10** setup
- **Dependency caching** for faster builds
- **Static site generation** with Next.js
- **Automatic deployment** to GitHub Pages

The workflow triggers on:
- Push to `main` branch
- Manual workflow dispatch

### Customization

You can customize the deployment by:

- **Changing the branch**: Modify `branches: ["main"]` in the workflow
- **Adding environment variables**: Add them to the workflow file
- **Modifying build commands**: Update the `pnpm build` step
- **Changing Node.js version**: Update `node-version` in the workflow

## License

This project is licensed under the MIT License.
