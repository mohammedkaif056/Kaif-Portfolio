# 🚀 Mohammed Kaif Pasha - Portfolio

A **stunning, interactive 3D portfolio** featuring real-time spacecraft animations, scroll-triggered effects, background music, and immersive particle systems. Built with cutting-edge web technologies including React Three Fiber, Next.js 14, GSAP, and Framer Motion.

![Portfolio Preview](./public/preview.png)

## ✨ Features

### 🎨 Creative 3D Experience
- **🚀 3D Spacecraft**: Interactive spacecraft with engine effects, trails, and sparkles in Hero section
- **🏎️ Futuristic Car**: Auto-rotating 3D car with neon underglow in Projects section
- **⭐ Starfield Background**: 5000+ animated stars creating depth
- **💫 Particle Cursor**: Mouse leaves colorful particle trails with physics
- **🌊 Parallax Scrolling**: Multi-layer depth effects throughout

### 🎵 Interactive Elements
- **Background Music Player**: Glassmorphic player with volume control and visualizer
- **Scroll Progress Bar**: Gradient progress indicator
- **Floating Geometric Shapes**: 15+ animated shapes creating dynamic background
- **Gradient Orbs**: Pulsing, moving orbs with blur effects
- **Code Rain Effect**: Matrix-style falling code in Skills section

### 🎭 Advanced Animations
- **Scroll Reveal**: Sections fade in as you scroll
- **Mouse Follower**: Custom animated cursor
- **Shimmer Effects**: Glowing, shimmering elements
- **Glitch Animations**: Tech-inspired glitch effects
- **Pulse Rings**: Expanding ring animations

### 🎯 Performance & Accessibility
- **GPU Accelerated**: WebGL-powered 3D graphics
- **Smooth Scrolling**: Lenis smooth scroll integration
- **Reduced Motion Support**: Respects user preferences
- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Meta tags, OpenGraph, JSON-LD

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis, Locomotive Scroll
- **Styling**: Tailwind CSS
- **Typography**: Inter, JetBrains Mono
- **Icons**: React Icons (Feather, FontAwesome)

### New Libraries Added
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: 3D helpers (Float, Trail, Sparkles, Stars, Environment)
- **gsap**: Advanced animation library
- **lenis**: Smooth scroll library
- **locomotive-scroll**: Scroll effects

### Development
- **Language**: TypeScript
- **Build Tool**: Next.js/Turbopack
- **Package Manager**: npm

## 🎮 Interactive Features

1. **Background Music**
   - Click bottom-right button to play/pause
   - Volume slider when playing
   - Mute/unmute toggle
   - Animated visualizer bars

2. **3D Spacecraft**
   - Auto-rotating view
   - Floating animation
   - Engine thruster effects
   - Particle sparkles
   - Trail effects

3. **Mouse Interactions**
   - Particle trails follow cursor
   - Custom animated mouse follower
   - Interactive hover states

4. **Scroll Effects**
   - Progress bar at top
   - Parallax sections
   - Fade-in animations
   - Floating elements

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
│   ├── layout.tsx          # Root layout with BackgroundMusic
│   ├── page.tsx            # Main page with scroll effects
│   └── globals.css         # Global styles + new animations
├── components/
│   ├── 3d/
│   │   ├── NeuralOrb.tsx   # Hero 3D orb
│   │   ├── ParticleField.tsx
│   │   ├── SkillOrbit.tsx  # Skills 3D visualization
│   │   ├── TechnicalBackground.tsx
│   │   └── Vehicles.tsx    # 🆕 Spacecraft & Car models
│   ├── audio/
│   │   └── BackgroundMusic.tsx  # 🆕 Music player
│   ├── effects/
│   │   ├── ScrollEffects.tsx    # 🆕 Scroll animations
│   │   ├── SectionBackgrounds.tsx  # 🆕 3D backgrounds
│   │   └── InteractiveCursor.tsx   # 🆕 Particle cursor
│   ├── sections/
│   │   ├── Hero.tsx        # 🆕 With 3D spacecraft
│   │   ├── About.tsx
│   │   ├── Projects.tsx    # 🆕 With 3D car
│   │   ├── Skills.tsx      # 🆕 With orbs & code rain
│   │   ├── Experience.tsx
│   │   ├── Hackathons.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── data/
│   ├── profile.json        # Personal information
│   ├── projects.json       # Project data
│   └── hackathons.json     # Hackathon data
├── public/
│   ├── projects/           # Project images (SVG)
│   ├── hackathons/         # Hackathon images (SVG)
│   └── models/             # 3D models (optional GLTF)
├── CREATIVE_FEATURES.md    # 🆕 Detailed feature guide
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
