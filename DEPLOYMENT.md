# G.Duck Jordan Website - Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd g-duck-website
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
g-duck-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and animations
│   └── loading.tsx         # Loading state
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with duck mascot
│   ├── FeaturedProducts.tsx # Product carousel
│   ├── StoreAisle.tsx      # Fake 3D store aisle
│   ├── Locations.tsx        # Store locations
│   ├── About.tsx           # Timeline and mission
│   ├── Footer.tsx          # Footer
│   └── InteractiveElements.tsx # Interactive features
├── public/                 # Static assets
└── package.json           # Dependencies

```

## Features Implemented

### ✅ Hero Section
- Large G.DUCK logo
- Animated SVG duck mascot
- Floating balloons (CSS animations)
- CTA button with hover effects
- Parallax background

### ✅ Featured Products
- Responsive product grid
- Hover animations (bounce effect)
- Scroll-triggered fade-in animations
- SVG placeholder images (ready for WebP replacement)

### ✅ Fake 3D Store Aisle
- CSS perspective transforms
- Layered background/middle/foreground
- Floating toy animations
- Subtle parallax on scroll

### ✅ Interactive Elements
- Duck footprints on scroll (CSS)
- Duck icons that wiggle on hover
- Clickable balloons that rise upward
- Sound toggle button (ready for audio integration)

### ✅ Locations Section
- Location cards with pin icons
- Bounce animation on hover
- Responsive grid layout

### ✅ About/Opening Section
- Timeline with animated markers
- Sticker-style date badges
- Mission card with rounded design

### ✅ Performance Optimizations
- CSS-only animations (no heavy libraries)
- Lazy loading ready (Next.js Image component)
- Minimal dependencies
- Optimized CSS with keyframe animations
- Mobile-first responsive design

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --yellow: #FFD600;
  --black: #000000;
  --white: #FFFFFF;
}
```

### Adding Real Images
Replace SVG placeholders in `FeaturedProducts.tsx` with Next.js Image components:
```tsx
import Image from 'next/image'

<Image
  src="/images/product-1.webp"
  alt={product.name}
  width={300}
  height={300}
  loading="lazy"
/>
```

### Adding Sound Effects
1. Add audio files to `public/sounds/`
2. Update `InteractiveElements.tsx`:
```tsx
const audio = new Audio('/sounds/quack.mp3')
audio.play().catch(() => {})
```

## Performance Tips

- All animations use CSS (GPU-accelerated)
- No heavy 3D engines (Three.js, etc.)
- Minimal JavaScript for interactivity
- SVG graphics (scalable, lightweight)
- Ready for WebP image optimization

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox required
- CSS transforms and animations required

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
# Deploy the 'out' or '.next' directory
```

## Lighthouse Optimization

The site is optimized for:
- ✅ Fast loading (minimal dependencies)
- ✅ Mobile responsiveness
- ✅ Accessibility (semantic HTML)
- ✅ SEO (metadata in layout.tsx)
- ✅ Performance (CSS animations, lazy loading ready)

## Next Steps

1. Replace placeholder SVGs with actual product images (WebP format)
2. Add real product data/API integration
3. Implement shopping cart functionality
4. Add contact form
5. Integrate with Instagram API for live feed
6. Add Arabic language support (RTL)

