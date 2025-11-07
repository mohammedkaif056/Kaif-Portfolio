# Deployment Guide

Complete guide to deploying your portfolio to production.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure project:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables
In Vercel project settings → Environment Variables:
```
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key
HCAPTCHA_SECRET_KEY=your_secret_key
CONTACT_EMAIL=mdkaifpasha2k@gmail.com
```

### Step 4: Deploy
Click "Deploy" - Done! 🎉

Your site will be live at: `https://your-project.vercel.app`

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 🔧 Netlify

### Step 1: Build Settings
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Import from GitHub
3. Add environment variables
4. Deploy

---

## 📦 Docker

### Dockerfile
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Build & Run
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ☁️ AWS Amplify

### Step 1: amplify.yml
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 2: Deploy
1. Go to AWS Amplify Console
2. Connect repository
3. Configure build settings
4. Deploy

---

## 🌐 Cloudflare Pages

### Step 1: Build Configuration
- Build command: `npm run build`
- Build output: `.next`
- Framework preset: Next.js

### Step 2: Environment Variables
Add in Cloudflare Pages settings

### Step 3: Deploy
Connect GitHub and deploy automatically

---

## 📊 Analytics Setup

### Vercel Analytics
```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics
```tsx
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🔐 Environment Variables

### Required
```env
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key
HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key
CONTACT_EMAIL=mdkaifpasha2k@gmail.com
```

### Optional
```env
# Email service (if using SendGrid, etc.)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_VERIFIED_SENDER=noreply@yourdomain.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

---

## ✅ Pre-Deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] Update `profile.json` with your info
- [ ] Update `projects.json` with your projects
- [ ] Add project screenshots to `public/projects/`
- [ ] Replace placeholder favicon
- [ ] Add hCaptcha keys
- [ ] Test contact form
- [ ] Run Lighthouse audit (aim for 90+)
- [ ] Test on mobile devices
- [ ] Check accessibility (screen reader)
- [ ] Verify all links work
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

---

## 🎯 Post-Deployment

### Performance Monitoring
- Use Vercel Analytics
- Monitor Core Web Vitals
- Check Lighthouse scores regularly

### SEO
- Submit sitemap to Google Search Console
- Add to LinkedIn/GitHub profile
- Share on social media

### Maintenance
- Update projects regularly
- Keep dependencies updated
- Monitor contact form submissions
- Backup data files

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 3D Not Rendering
- Check WebGL support
- Verify model paths
- Check console for errors

### Contact Form Not Working
- Verify hCaptcha keys
- Check API route logs
- Test with simple console.log

### Images Not Loading
- Verify paths start with `/`
- Check `next.config.js` image domains
- Use Next.js `<Image>` component

---

## 📞 Support

Issues? Check:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Issues](https://github.com/yourusername/portfolio/issues)

---

**Ready to deploy? Let's go! 🚀**
