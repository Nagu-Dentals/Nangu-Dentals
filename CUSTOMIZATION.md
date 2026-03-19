# 📝 Quick Content Update Guide

Easy guide for updating your website content without deep technical knowledge.

## 🔧 Essential Updates Before Launch

### 1. Update Logo (5 minutes)

**File:** `/src/app/components/Logo.tsx`

**Option A - Use Your Image:**
```tsx
export function Logo() {
  return (
    <div className="h-12 w-48 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 p-2">
      <img 
        src="/path-to-your-logo.png" 
        alt="Nagu Dental" 
        className="h-full w-full object-contain"
      />
    </div>
  );
}
```

**Option B - Keep the SVG but customize colors:**
- Line 30: Change `fill="#0085cc"` to your brand color
- Line 43: Change `stroke="#0085cc"` to your brand color

---

### 2. Update Phone Numbers (10 minutes)

**Find and replace these in ALL files:**

Current: `+91 88619 32535`
Replace with: `YOUR_PHONE_NUMBER`

**Find and replace these links:**

Current: `tel:+918861932535`
Replace with: `tel:YOUR_PHONE_NUMBER` (no spaces or + in link)

Current: `https://wa.me/918861932535`
Replace with: `https://wa.me/YOUR_PHONE_NUMBER` (country code without +)

**Files to update:**
- `/src/app/components/FloatingCTA.tsx` (line 16)
- `/src/app/components/Contact.tsx` (line 43)
- `/src/app/components/Footer.tsx` (lines vary)
- `/src/app/components/Booking.tsx` (line 151)

---

### 3. Update Email Address (5 minutes)

**Find and replace:**

Current: `nagudentals@gmail.com`
Replace with: `YOUR_EMAIL@domain.com`

**Files to update:**
- `/src/app/components/Contact.tsx`
- `/src/app/components/Booking.tsx`

---

### 4. Update Branch Addresses (15 minutes)

**File:** `/src/app/components/Contact.tsx`

Update lines 9-21 with your actual addresses:

```tsx
const branches = [
  {
    name: 'Branch 01: YOUR_LOCATION_1',
    address: 'YOUR FULL ADDRESS LINE 1, LINE 2, CITY, PINCODE',
    shortAddress: 'SHORT DESCRIPTION OF LOCATION',
  },
  {
    name: 'Branch 02: YOUR_LOCATION_2',
    address: 'YOUR FULL ADDRESS LINE 1, LINE 2, CITY, PINCODE',
    shortAddress: 'SHORT DESCRIPTION OF LOCATION',
  },
];
```

**Also update in:**
- `/src/app/components/Footer.tsx` (lines 48-66)
- `/src/app/components/MapModal.tsx` (lines 12-28)

---

### 5. Update Google Maps Links (5 minutes)

**Get your Google Maps link:**
1. Go to Google Maps
2. Search for your clinic
3. Click "Share"
4. Copy the link

**Update in these files:**
- `/src/app/components/Contact.tsx` (line 79)
- `/src/app/components/MapModal.tsx` (line 24)

Replace `https://maps.google.com` with your actual maps link.

---

### 6. Update Clinic Hours (5 minutes)

Current hours: **9:00 AM - 10:00 PM, Open Everyday**

**To change:**

**File:** `/src/app/components/Navigation.tsx` (line 119)
```tsx
setIsOpen(hour >= 9 && hour < 22); // 9 AM to 10 PM (22 = 10 PM in 24hr)
```

Change `9` to opening hour and `22` to closing hour (24-hour format).

**Also update text in:**
- `/src/app/components/Booking.tsx` (line 56)
- `/src/app/components/MapModal.tsx` (line 115)

---

### 7. Update Doctor Names (10 minutes)

Current doctors:
- Dr. Bashishta (B.D.S)
- Dr. Ankita Reddy (B.D.S)

**Files to update:**
- `/src/app/components/About.tsx` (line 22)
- `/src/app/components/Team.tsx` (line 71-82)

---

### 8. Update Promo Offer (5 minutes)

**File:** `/src/app/components/PromoBanner.tsx` (line 38)

Current: "Get 20% OFF on First Consultation!"

Change to your current offer or set to `false` in App.tsx to hide banner.

---

### 9. Replace Images (30 minutes)

**All images currently use Unsplash (placeholder images).**

**To replace:**

1. Prepare your images:
   - Optimize for web (compress to reduce file size)
   - Recommended formats: JPG, PNG, WebP
   - Place in `/public/images/` folder

2. Update image sources:

**Example:**
```tsx
// Before (Unsplash)
src="https://images.unsplash.com/photo-1629909613654..."

// After (Your image)
src="/images/clinic-interior.jpg"
```

**Images to replace:**
- Hero section: `/src/app/components/Hero.tsx` (line 49)
- About section: `/src/app/components/About.tsx` (lines 62, 70)
- Services: `/src/app/components/Services.tsx` (lines 15-68)
- Gallery: `/src/app/components/Gallery.tsx` (lines 5-28)
- Testimonials: `/src/app/components/Testimonials.tsx` (lines 9, 16, 23)
- Before/After: `/src/app/components/BeforeAfter.tsx` (lines 5-20)

---

### 10. Update Services (15 minutes)

**File:** `/src/app/components/Services.tsx`

Current services (lines 8-51):
1. Root Canal
2. Implants
3. Whitening
4. Ortho Braces
5. Cleaning
6. Crowns & Bridges
7. Pediatric Care
8. Emergency Care

**To add/modify a service:**
```tsx
{
  title: 'Your Service Name',
  description: 'Brief description of the service.',
  category: 'service-type',
  image: '/images/your-service.jpg',
}
```

---

### 11. Update Statistics (5 minutes)

**File:** `/src/app/components/Stats.tsx` (lines 35-40)

Current stats:
- 5000+ Happy Patients
- 10+ Years Experience
- 15+ Dental Services
- 2 Modern Clinics

Change numbers to match your actual data.

---

### 12. Update Testimonials (20 minutes)

**File:** `/src/app/components/Testimonials.tsx` (lines 6-28)

Replace with real patient testimonials:

```tsx
{
  name: 'Patient Name',
  treatment: 'Treatment Type',
  rating: 5, // Number 1-5
  text: 'Their testimonial text here.',
  image: '/images/patient-photo.jpg', // or use avatar
}
```

**Privacy Note:** Always get permission before using patient names/photos!

---

### 13. Update FAQ (10 minutes)

**File:** `/src/app/components/FAQ.tsx` (lines 7-41)

Add/modify questions:

```tsx
{
  question: 'Your question here?',
  answer: 'Your detailed answer here.',
}
```

---

## 🎨 Optional Updates

### Change Primary Color

**Files to update:**
- Search for `#0085cc` (current blue)
- Replace with your brand color
- Also search for `blue-600`, `blue-500`, etc.

### Update Fonts

**File:** `/src/styles/fonts.css`

Replace Google Fonts import with your preferred font.

### Modify Animations

**To reduce animations:**
Set `duration` values lower in Motion components.

**To disable animations:**
Remove `motion.` prefix from components (changes to regular HTML elements).

---

## ✅ Pre-Launch Checklist

Before deploying:

- [ ] Logo updated
- [ ] All phone numbers updated
- [ ] Email address updated
- [ ] Branch addresses correct
- [ ] Google Maps links working
- [ ] Clinic hours accurate
- [ ] Doctor names correct
- [ ] Images replaced with clinic photos
- [ ] Services list accurate
- [ ] Statistics updated
- [ ] Testimonials (if using real ones)
- [ ] FAQ relevant to your clinic
- [ ] Test booking form
- [ ] Check all WhatsApp/Call links
- [ ] Mobile responsive check
- [ ] Browser testing (Chrome, Safari, Firefox)

---

## 🆘 Quick Help

### Where is X located?

**Use VS Code search (Cmd/Ctrl + Shift + F):**
- Search for the text you want to change
- Update in all files where it appears

### I broke something!

**Git is your friend:**
```bash
# See what you changed
git diff

# Undo all changes
git reset --hard

# Undo changes to one file
git checkout -- path/to/file.tsx
```

### Need to test locally?

```bash
npm install  # First time only
npm run dev  # Start development server
```

Visit `http://localhost:5173`

---

## 💡 Pro Tips

1. **Make changes in small batches** - easier to track what breaks
2. **Test after each change** - don't change everything at once
3. **Keep backups** - commit to git frequently
4. **Use browser DevTools** - Right-click > Inspect to debug
5. **Ask for help** - Don't hesitate to reach out!

---

**Need more help?** Check:
- `README.md` for overview
- `DEPLOYMENT.md` for deployment steps
- `FEATURES.md` for feature list

**Happy customizing! 🎨✨**
