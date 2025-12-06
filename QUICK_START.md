# G.Duck Jordan - Quick Start Guide

## 🚀 Getting Started

```bash
# Navigate to project directory
cd g-duck-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** to see your site!

## 📁 Project Overview

This is a lightweight, playful website for G.Duck Jordan built with:
- **Next.js 14** (React framework)
- **TypeScript** (type safety)
- **CSS Modules** (scoped styles)
- **Pure CSS animations** (no heavy libraries)

## 🎨 Brand Colors

- **Yellow**: `#FFD600` - Primary brand color
- **Black**: `#000000` - Text and accents
- **White**: `#FFFFFF` - Background

## 🎯 Key Features

### 1. Hero Section (`components/Hero.tsx`)
- Animated duck mascot (SVG)
- Floating balloons (CSS keyframes)
- Smooth parallax background
- "Shop Now" CTA button

### 2. Products Carousel (`components/FeaturedProducts.tsx`)
- Responsive grid layout
- Hover bounce animations
- Scroll-triggered fade-ins
- Ready for real product images

### 3. Store Aisle (`components/StoreAisle.tsx`)
- Fake 3D effect using CSS perspective
- Floating toy animations
- Parallax scrolling

### 4. Interactive Elements (`components/InteractiveElements.tsx`)
- Duck footprints on scroll
- Wiggle animations on hover
- Clickable rising balloons
- Sound toggle (ready for audio)

### 5. Locations (`components/Locations.tsx`)
- Store location cards
- Pin icon animations
- Hover effects

### 6. About Timeline (`components/About.tsx`)
- Animated timeline
- Sticker-style badges
- Mission statement card

## 🛠️ Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --yellow: #FFD600;  /* Change primary color */
  --black: #000000;   /* Change text color */
  --white: #FFFFFF;   /* Change background */
}
```

### Add Real Images
Replace SVG placeholders with Next.js Image:
```tsx
import Image from 'next/image'

<Image
  src="/images/product.webp"
  alt="Product name"
  width={300}
  height={300}
/>
```

### Modify Animations
All animations are in `app/globals.css`:
- `@keyframes float` - Balloon floating
- `@keyframes bounce` - Hover effects
- `@keyframes wiggle` - Duck animations
- `@keyframes fadeInUp` - Scroll animations

## 📱 Mobile Responsive

The site is fully responsive:
- Mobile-first CSS
- Touch-friendly interactions
- Optimized animations for mobile
- Hamburger menu on small screens

## ⚡ Performance

- **No heavy 3D engines** (Three.js, etc.)
- **CSS-only animations** (GPU accelerated)
- **Minimal JavaScript** (only for interactivity)
- **SVG graphics** (scalable, lightweight)
- **Ready for WebP images**

## 🚢 Deployment

### Vercel (Easiest)
1. Push code to GitHub
2. Import in Vercel dashboard
3. Deploy automatically

### Build Locally
```bash
npm run build
npm start
```

## 📝 Next Steps

1. ✅ Replace placeholder SVGs with real product images
2. ✅ Add e-commerce functionality
3. ✅ Connect to Instagram API
4. ✅ Add Arabic language support (RTL)
5. ✅ Implement contact form
6. ✅ Add real store locations data

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Use different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**Styles not loading?**
- Check CSS Module imports
- Verify file paths
- Clear browser cache

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [SVG Guide](https://developer.mozilla.org/en-US/docs/Web/SVG)

---

Built with ❤️ for G.Duck Jordan 🦆

