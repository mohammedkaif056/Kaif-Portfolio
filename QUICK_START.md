# 🚀 Quick Reference Guide

Essential commands and customization points for your portfolio.

## 📝 Most Common Edits

### 1. Update Personal Info
**File**: `data/profile.json`
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "tagline": "Your Title",
  "bio": "Your bio text..."
}
```

### 2. Add/Update Projects
**File**: `data/projects.json`
```json
{
  "featured": [
    {
      "name": "Project Name",
      "summary": "Short description",
      "stack": ["React", "Node.js"],
      "source": "https://github.com/you/repo",
      "demo": "https://demo.com"
    }
  ]
}
```

### 3. Change Colors
**File**: `tailwind.config.ts`
```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue
  },
  accent: {
    purple: '#a78bfa',
    pink: '#f472b6',
  }
}
```

## ⚡ Command Cheatsheet

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (localhost:3000)
npm run build           # Build for production
npm run start           # Start production server

# Testing
npm run lint            # Check code quality

# Deployment
git push                # Deploy to Vercel (after setup)
```

## 🎨 Customization Hotspots

### Hero Section
**File**: `components/sections/Hero.tsx`
- Line 52: Headline text
- Line 72: Typewriter phrases
- Line 165: 3D avatar slot

### Navigation
**File**: `components/Navigation.tsx`
- Line 7: Nav menu items
- Line 43: Logo text

### Footer
**File**: `components/Footer.tsx`
- Line 17: Brand description
- Line 88: Copyright text

### Colors
**Files to edit**:
- `tailwind.config.ts` → Theme colors
- `app/globals.css` → CSS variables

## 🔧 Environment Variables

**File**: `.env`
```env
# Required for contact form
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_key_here
HCAPTCHA_SECRET_KEY=your_secret_here
CONTACT_EMAIL=your@email.com
```

Get keys: https://www.hcaptcha.com/

## 📁 Adding Content

### Project Images
1. Add image to `public/projects/`
2. Update `projects.json`:
   ```json
   "image": "/projects/your-image.jpg"
   ```

### 3D Avatar
See `AVATAR_GUIDE.md` for:
- Spline integration
- GLTF model setup
- Ready Player Me

## 🐛 Common Issues & Fixes

### Error: Module not found
```bash
npm install
```

### Error: Port 3000 in use
```powershell
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

### 3D scene blank
- Check browser console (F12)
- Verify WebGL support: chrome://gpu
- Try Chrome/Edge (best WebGL support)

### Build fails
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📊 Performance Tips

1. **Optimize images**: Use WebP, max 500KB
2. **Reduce 3D complexity**: Lower particle count on mobile
3. **Lazy load**: Heavy components below fold
4. **Test**: Run Lighthouse in Chrome DevTools

## 🎯 Pre-Launch Checklist

- [ ] Updated `profile.json` with your info
- [ ] Updated `projects.json` with projects
- [ ] Added project screenshots
- [ ] Tested contact form
- [ ] Checked mobile responsiveness
- [ ] Ran Lighthouse (aim 90+)
- [ ] Added custom favicon
- [ ] Set up analytics (optional)
- [ ] Verified all links work
- [ ] Spell-checked all text

## 🚀 Deployment Steps

### Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables
5. Deploy!

### Custom Domain
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add to Vercel project settings
3. Update DNS records
4. Wait for SSL certificate

## 📱 Testing Devices

Test on:
- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Tablet
- ✅ Different screen sizes

## 🔗 Useful Links

- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **React Three Fiber**: https://docs.pmnd.rs
- **Framer Motion**: https://www.framer.com/motion
- **hCaptcha**: https://www.hcaptcha.com
- **Vercel**: https://vercel.com

## 💡 Tips

1. **Mobile First**: Design for mobile, enhance for desktop
2. **Performance**: 3D is expensive, optimize wisely
3. **Content**: Showcase 3-5 best projects
4. **Updates**: Keep content fresh
5. **Analytics**: Track what works

## 🎓 Next Level

Want to enhance further?
- Add blog with MDX
- Integrate CMS (Sanity, Contentful)
- Add dark/light mode toggle
- Implement search
- Add more 3D interactions

---

## 🆘 Need Help?

1. Check `README.md` for full docs
2. Read `DEPLOYMENT.md` for deploy help
3. See `AVATAR_GUIDE.md` for 3D setup
4. Check browser console for errors

**Remember**: Start simple, iterate, improve! 🚀
