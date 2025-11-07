# 🚀 Mohammed Kaif Pasha - Portfolio

A premium, responsive 3D portfolio website showcasing expertise in AI, Full-Stack Development, and Web3 technologies. Built with cutting-edge web technologies including React Three Fiber, Next.js 14, and Framer Motion.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **Immersive 3D Experience**: Interactive WebGL scenes with neural orb animations and particle fields
- **Smooth Animations**: Page transitions and micro-interactions powered by Framer Motion
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Lighthouse score ≥ 90, lazy loading, and GPU-efficient rendering
- **Accessibility First**: WCAG compliant with semantic HTML and keyboard navigation
- **SEO Optimized**: Meta tags, OpenGraph, JSON-LD structured data
- **Contact Form**: Integrated hCaptcha for spam protection
- **Dark Theme**: Eye-friendly dark mode with neon accents

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Typography**: Inter, JetBrains Mono
- **Icons**: React Icons (Feather)

### Development
- **Language**: TypeScript
- **Build Tool**: Next.js/Turbopack
- **Package Manager**: npm/yarn/pnpm

## 📦 Installation

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Setup Steps

1. **Clone the repository**
   ```bash
   cd c:\Users\mdkai\Desktop\profolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your keys:
   ```env
   NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key
   HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key
   CONTACT_EMAIL=mdkaifpasha2k@gmail.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🎨 Customization

### Update Personal Information

Edit `data/profile.json` to update:
- Name, tagline, bio
- Education details
- Contact information
- Skills and technologies
- Achievements

### Update Projects

Edit `data/projects.json` to add/modify projects:
- Featured projects (displayed prominently)
- Additional projects
- Tech stack, links, descriptions

### Add 3D Avatar

Replace the placeholder in Hero section:

**Option 1: Spline Embed**
```tsx
// In components/sections/Hero.tsx, replace the avatar slot with:
<iframe 
  src='https://my.spline.design/your-scene-id'
  frameBorder='0'
  width='100%'
  height='100%'
/>
```

**Option 2: GLTF Model**
```tsx
// Import and use with React Three Fiber:
import { useGLTF } from '@react-three/drei'

function Avatar() {
  const { scene } = useGLTF('/models/avatar.glb')
  return <primitive object={scene} scale={2} />
}
```

### Customize Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    purple: '#a78bfa',
    pink: '#f472b6',
    // Add more accent colors
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Project Structure

```
profolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── 3d/
│   │   ├── NeuralOrb.tsx   # Hero 3D orb
│   │   ├── ParticleField.tsx
│   │   └── SkillOrbit.tsx  # Skills 3D visualization
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── data/
│   ├── profile.json        # Personal information
│   └── projects.json       # Project data
├── public/
│   ├── projects/           # Project images
│   └── models/             # 3D models (GLTF)
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Performance Tips

1. **Optimize 3D Scenes**
   - Use `dpr` (device pixel ratio) limits
   - Reduce particle count on mobile
   - Implement level-of-detail (LOD)

2. **Image Optimization**
   - Use Next.js `<Image>` component
   - Serve WebP format
   - Lazy load below-the-fold images

3. **Code Splitting**
   - Dynamic imports for heavy components
   - Lazy load 3D scenes
   - Route-based splitting (automatic)

4. **Reduce Motion**
   - Respect `prefers-reduced-motion`
   - Disable 3D on low-end devices

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Design Inspiration**: Modern portfolio trends
- **3D Graphics**: Three.js community
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 📧 Contact

Mohammed Kaif Pasha
- Email: mdkaifpasha2k@gmail.com
- GitHub: [@mohammedkaif056](https://github.com/mohammedkaif056)
- LinkedIn: [Mohammed Kaif Pasha](https://www.linkedin.com/in/mohammed-kaif-pasha-138003255)

---

**Built with ❤️ using React + R3F + Framer Motion**

© 2025 Mohammed Kaif Pasha. All rights reserved.
