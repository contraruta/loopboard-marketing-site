# Deployment Guide

This guide explains how to deploy the LoopBoard Marketing Website to various hosting platforms.

## Prerequisites

- Node.js 18+
- pnpm 10+
- Git

## Building for Production

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Preview the build locally
pnpm run preview
```

The production build will be in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers free hosting with automatic deployments from GitHub.

**Steps:**

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Configure build settings:
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
6. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### 2. Netlify

Netlify provides free hosting with continuous deployment.

**Steps:**

1. Push your repository to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings:
   - **Build Command**: `pnpm run build`
   - **Publish Directory**: `dist`
6. Click "Deploy site"

Your site will be live at `your-project.netlify.app`

### 3. GitHub Pages

Deploy directly from your GitHub repository.

**Steps:**

1. Ensure your repository is public
2. Go to repository Settings → Pages
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: main (or your deployment branch)
   - **Folder**: / (root)
4. Click "Save"

Your site will be live at `yourusername.github.io/loopboard-marketing-site`

**Alternative with Actions:**

The repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages. Simply push to the `main` branch.

### 4. Traditional Web Hosting

For traditional hosting (cPanel, FTP, etc.):

**Steps:**

1. Build the project locally: `pnpm run build`
2. Upload the contents of the `dist/` folder to your web server
3. Configure your web server to serve `index.html` for all routes (for SPA routing)

**Example nginx configuration:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/loopboard-marketing;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 5. Docker

Deploy using Docker containers.

**Dockerfile:**

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["http-server", "dist", "-p", "3000"]
```

**Build and run:**

```bash
docker build -t loopboard-marketing .
docker run -p 3000:3000 loopboard-marketing
```

## Environment Variables

The marketing website doesn't require any environment variables for basic functionality. However, you can add them for analytics or third-party services.

Create a `.env` file:

```
VITE_ANALYTICS_ID=your-analytics-id
VITE_API_URL=https://api.example.com
```

Reference in code:

```typescript
const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
```

## Performance Optimization

### Image Optimization

The website uses optimized images. For additional optimization:

```bash
# Install image optimization tools
pnpm add -D sharp

# Optimize images
npx sharp -i src/assets/*.png -o dist/assets/ --resize 1920
```

### Caching Strategy

Configure caching headers for your hosting:

```
# .htaccess (Apache)
<FilesMatch "\.(js|css|woff2|png|jpg)$">
    Header set Cache-Control "max-age=31536000, immutable"
</FilesMatch>

<FilesMatch "\.(html|json)$">
    Header set Cache-Control "max-age=3600, must-revalidate"
</FilesMatch>
```

### Compression

Enable gzip compression on your server:

```nginx
# nginx
gzip on;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
gzip_vary on;
```

## SSL/HTTPS

Always use HTTPS in production. Most hosting platforms provide free SSL certificates:

- **Vercel/Netlify**: Automatic HTTPS
- **GitHub Pages**: Automatic HTTPS
- **Traditional Hosting**: Use Let's Encrypt (free)
- **cPanel**: Use AutoSSL

## Monitoring & Analytics

### Sentry (Error Tracking)

```bash
pnpm add @sentry/react
```

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
});
```

### Google Analytics

Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### 404 Errors on Routes

Ensure your hosting is configured to serve `index.html` for all routes (SPA routing).

### Slow Performance

1. Check bundle size: `pnpm run build -- --analyze`
2. Enable compression on your server
3. Use a CDN for static assets
4. Optimize images

### CORS Issues

If integrating with external APIs, configure CORS headers on your server or use a proxy.

## Continuous Deployment

### GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically:

1. Installs dependencies
2. Builds the project
3. Runs tests
4. Deploys to GitHub Pages (on main branch)

Customize the workflow in `.github/workflows/ci.yml` as needed.

## Rollback

If you need to rollback to a previous version:

**Vercel/Netlify**: Use the deployment history in their dashboard

**GitHub Pages**: Revert the commit and push

**Traditional Hosting**: Restore from backups

## Support

For deployment issues, please open an issue on GitHub or contact support.

---

**INVICTUS** – Deploy with confidence.
