# Framer Motion Integration Guide

## 🎨 Enhanced Interactivity with Framer Motion

The G.Duck Jordan website now uses **Framer Motion** for smooth, performant animations and enhanced interactivity!

## ✨ What's New

### 1. **Hero Section**
- Smooth fade-in animations on page load
- Duck mascot floats with Framer Motion
- Logo scales and changes color on hover
- CTA button has tap feedback
- **Draggable duck mascot** - try dragging it around!

### 2. **Featured Products**
- Staggered entrance animations when scrolling into view
- Cards lift and scale on hover
- Smooth transitions between states
- Tap feedback on buttons

### 3. **Store Aisle (3D Section)**
- Scroll-based parallax using `useScroll` hook
- Floating toys with smooth animations
- Toys rotate and scale on hover
- Opacity changes based on scroll position

### 4. **Locations**
- Cards animate in with stagger effect
- Pin icons bounce and rotate on hover
- Smooth hover lift animations
- Button interactions

### 5. **About Timeline**
- Timeline items slide in from left
- Marker dots pulse continuously
- Cards lift on hover
- Stickers rotate playfully

### 6. **Interactive Elements**
- **Draggable duck icons** - drag them around the screen!
- Smooth balloon rise animations
- Footprints fade in/out smoothly
- Sound toggle button pulses when enabled

### 7. **Header Navigation**
- Logo color animates continuously
- Smooth mobile menu slide-in
- Hover effects on all links
- Tap feedback

## 🎯 Key Framer Motion Features Used

### Scroll Animations
```tsx
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
})
```

### Stagger Children
```tsx
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}}
```

### Drag & Drop
```tsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
  dragElastic={0.7}
/>
```

### Hover & Tap
```tsx
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
```

## 🚀 Performance

Framer Motion is optimized for performance:
- Uses GPU acceleration
- Minimal re-renders
- Smooth 60fps animations
- Lightweight bundle (~50KB gzipped)

## 🎮 Interactive Features to Try

1. **Drag the duck mascot** in the hero section
2. **Drag the floating duck icons** around the page
3. **Click anywhere** to spawn rising balloons
4. **Hover over products** to see them lift
5. **Scroll slowly** to see parallax effects
6. **Hover over timeline markers** to see them pulse

## 📝 Customization

### Change Animation Speed
```tsx
transition={{ duration: 0.5 }} // Faster
transition={{ duration: 1.5 }} // Slower
```

### Add More Drag Constraints
```tsx
dragConstraints={{ 
  left: -100, 
  right: 100, 
  top: -100, 
  bottom: 100 
}}
```

### Custom Easing
```tsx
transition={{ 
  ease: "easeInOut",
  // or: "easeIn", "easeOut", "circIn", "backOut", etc.
}}
```

## 🎨 Animation Types

- **Fade In**: `opacity: 0 → 1`
- **Slide Up**: `y: 50 → 0`
- **Scale**: `scale: 0.9 → 1`
- **Rotate**: `rotate: -10 → 0`
- **Stagger**: Multiple items animate in sequence

## 🔧 Troubleshooting

**Animations not working?**
- Make sure `npm install` has been run
- Check browser console for errors
- Verify Framer Motion is imported correctly

**Performance issues?**
- Reduce animation complexity
- Use `will-change` CSS property
- Limit simultaneous animations

---

Enjoy the enhanced interactivity! 🦆✨

