# 🚀 GitHub Pages Deployment Guide

Complete step-by-step guide to deploy your Nagu Dental website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 16+ installed

## 🎯 Deployment Steps

### Step 1: Prepare Your Repository

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `nagu-dental` (or your preferred name)
   - Make it Public (required for free GitHub Pages)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

### Step 2: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Nagu Dental Website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/nagu-dental.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings" tab**
3. **In the left sidebar, click "Pages"**
4. **Under "Build and deployment":**
   - Source: Select **"GitHub Actions"**
5. **Save the settings**

### Step 4: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your project
- Deploy to GitHub Pages
- Your site will be live at: `https://YOUR_USERNAME.github.io/nagu-dental/`

**First deployment takes 1-2 minutes.**

### Step 5: Verify Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark ✓)
4. Visit your site: `https://YOUR_USERNAME.github.io/nagu-dental/`

## 🔄 Updating Your Website

Every time you want to update your website:

```bash
# Make your changes to the code

# Stage changes
git add .

# Commit with a descriptive message
git commit -m "Update contact information"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy!
```

## 🎨 Customization Checklist

Before going live, make sure to update:

### ✅ Logo
- [ ] Replace dummy logo in `/src/app/components/Logo.tsx`

### ✅ Contact Information
- [ ] Phone numbers: `+91 88619 32535` → Your number
- [ ] Email: `nagudentals@gmail.com` → Your email
- [ ] WhatsApp link: Update in FloatingCTA, Footer, Contact

### ✅ Branch Addresses
- [ ] Update addresses in Contact and Footer components
- [ ] Update Google Maps links (currently placeholder)

### ✅ Images
- [ ] Replace Unsplash images with actual clinic photos
- [ ] Update team photos in Testimonials
- [ ] Update Before/After images

### ✅ Content
- [ ] Review all text content
- [ ] Update service descriptions
- [ ] Update clinic hours if different from 9 AM - 10 PM
- [ ] Update "10+ years experience" if needed

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., www.nagudental.com):

1. **Buy a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS:**
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Update GitHub Pages settings:**
   - Go to Settings → Pages
   - Custom domain: Enter `www.nagudental.com`
   - Enable "Enforce HTTPS"

4. **Wait for DNS propagation** (can take up to 24 hours)

## 🔧 Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

### Site Not Loading
- Wait 2-3 minutes after first deployment
- Clear browser cache
- Check if GitHub Pages is enabled
- Verify the repository is public

### Images Not Showing
- Check image URLs are correct
- Ensure images are in the correct directory
- Check browser console for errors

### 404 Error on Refresh
- This is normal for SPAs on GitHub Pages
- Users should navigate using the site's links
- Or implement a 404.html redirect solution

## 📊 Analytics (Optional)

Add Google Analytics:

1. Create a Google Analytics account
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add to `/index.html` or create analytics component

## 🔒 Environment Variables

For API keys or sensitive data:
- Use GitHub Secrets for build-time variables
- Never commit API keys to the repository
- Use environment variables in your build process

## 📱 Testing Before Deployment

```bash
# Build locally
npm run build

# Preview production build
npm run preview

# Test at http://localhost:4173
```

## 🎉 Success Checklist

- [ ] Repository created and code pushed
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] First deployment successful
- [ ] Site loads at GitHub Pages URL
- [ ] All links work correctly
- [ ] Mobile responsive design verified
- [ ] Forms tested (booking form)
- [ ] Contact links work (WhatsApp, Phone, Email)
- [ ] Images load correctly
- [ ] Animations work smoothly

## 📞 Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the Actions logs for error details
3. Verify all files are committed and pushed
4. Ensure repository is public

## 🎯 Quick Reference

**Your Site URL:**
```
https://YOUR_USERNAME.github.io/nagu-dental/
```

**GitHub Actions Status:**
```
https://github.com/YOUR_USERNAME/nagu-dental/actions
```

**Repository Settings:**
```
https://github.com/YOUR_USERNAME/nagu-dental/settings
```

---

**Need Help?** Check the Actions tab for detailed error logs or review the README.md for more information.

🎊 **Congratulations on deploying your website!** 🎊
