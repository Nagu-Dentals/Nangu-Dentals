# Nagu Dental Clinic Website 🦷✨

A modern, fully responsive dental clinic website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

![Nagu Dental](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38bdf8)

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Interactive Components**: 
  - Animated hero section with floating stats
  - Floating CTA buttons (WhatsApp, Call, Location)
  - Before/After transformation gallery
  - Patient testimonials carousel
  - FAQ accordion
  - Booking form with validation
  - Animated statistics counter
  - Scroll-to-top button
  - Promotional banner
- **Smooth Animations**: Motion-powered scroll animations and transitions
- **Form Validation**: React Hook Form for robust appointment booking
- **Real-time Status**: Dynamic clinic open/closed status indicator
- **Contact Integration**: Direct WhatsApp, phone, and email links
- **SEO Friendly**: Semantic HTML and proper meta structure

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nagu-dental.git

# Navigate to project directory
cd nagu-dental

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Visit `http://localhost:5173` in your browser.

## 📦 Building for Production

```bash
# Build the project
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions
   - Save

3. Push to main branch - your site will auto-deploy!

### Option 2: Manual Deployment

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🎨 Customization

### Update Logo
Replace the SVG logo in `/src/app/components/Logo.tsx` with your actual logo.

### Update Contact Information
Update phone numbers, email, and addresses in:
- `/src/app/components/Contact.tsx`
- `/src/app/components/Footer.tsx`
- `/src/app/components/FloatingCTA.tsx`
- `/src/app/components/Booking.tsx`

### Update Images
All images use Unsplash. Replace with actual clinic photos by updating image URLs in respective components.

### Change Colors
Modify colors in components or update the Tailwind theme in `/src/styles/theme.css`.

## 📱 Contact Features

- **WhatsApp Integration**: `https://wa.me/918861932535`
- **Phone**: `tel:+918861932535`
- **Email**: `mailto:nagudentals@gmail.com`

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion (Framer Motion) 12.23.24
- **Form Handling**: React Hook Form 7.55.0
- **Icons**: Lucide React 0.487.0
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Articles.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Booking.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── FloatingCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Loader.tsx
│   │   ├── Logo.tsx
│   │   ├── MapModal.tsx
│   │   ├── Navigation.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── WhyUs.tsx
│   │   └── hooks/
│   │       └── useInView.ts
│   └── App.tsx
├── styles/
│   ├── fonts.css
│   └── theme.css
└── imports/
    └── dentle.html (original reference)
```

## 🌟 Features Overview

### 1. **Hero Section**
   - Animated headline with gradient text
   - CTA buttons for booking and services
   - Floating statistics cards

### 2. **Trust Badges**
   - ISO certification
   - Expert dentists
   - Operating hours
   - Quality guarantee

### 3. **Services**
   - 8 dental services with hover effects
   - Category tags
   - Service images with grayscale-to-color effect

### 4. **Animated Statistics**
   - Counting animation on scroll
   - 5000+ patients
   - 10+ years experience
   - 15+ services
   - 2 modern clinics

### 5. **Before/After Gallery**
   - Interactive carousel
   - Treatment information
   - Transformation showcase

### 6. **Testimonials**
   - Patient reviews
   - Star ratings
   - Profile pictures

### 7. **Booking Form**
   - Form validation
   - Animated thank you message
   - Appointment details display
   - Auto-reset after 8 seconds

### 8. **FAQ Section**
   - Accordion-style questions
   - Smooth animations
   - Common dental queries

### 9. **Floating CTA**
   - WhatsApp chat
   - Direct call
   - Location finder
   - Pulsing animation

## 📄 License

This project is private and proprietary to Nagu Dental Clinic.

## 👨‍⚕️ About Nagu Dental

Nagu Dental is an Advance Multi-Speciality Dental Clinic led by Dr. Bashishta (B.D.S) and Dr. Ankita Reddy (B.D.S), providing world-class dental care in Bengaluru.

**Branches:**
- Hegganahalli Cross
- Srigandha Nagar

**Contact:** +91 88619 32535

---

Made with ❤️ for Nagu Dental Clinic
