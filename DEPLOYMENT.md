# Deployment Guide - Calculator Tools Website

This guide will help you deploy your calculator tools website to the internet.

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)
**Free hosting, custom domain support, automatic HTTPS**

1. **Via Drag & Drop (No Git required):**
   - Go to https://app.netlify.com/drop
   - Drag and drop the entire `/Users/muratkahraman/Downloads/dbm` folder
   - Your site will be live in seconds!
   - You'll get a URL like: `https://your-site-name.netlify.app`

2. **Via GitHub (Recommended for updates):**
   ```bash
   # Step 1: Initialize git repository
   cd /Users/muratkahraman/Downloads/dbm
   git init
   git add .
   git commit -m "Initial commit - Calculator Tools Website"

   # Step 2: Create GitHub repository
   # Go to https://github.com/new
   # Create a new repository (e.g., "calculator-tools")

   # Step 3: Push to GitHub
   git remote add origin https://github.com/YOUR_USERNAME/calculator-tools.git
   git branch -M main
   git push -u origin main

   # Step 4: Deploy on Netlify
   # - Go to https://app.netlify.com
   # - Click "Add new site" → "Import an existing project"
   # - Choose GitHub and select your repository
   # - Click "Deploy site"
   ```

### Option 2: Vercel
**Fast, free hosting with great performance**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/muratkahraman/Downloads/dbm
   vercel
   ```
   - Follow the prompts
   - Your site will be deployed instantly
   - URL: `https://your-project.vercel.app`

### Option 3: GitHub Pages
**Free hosting via GitHub**

1. **Create repository and push code (see Netlify GitHub steps above)**

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be at: `https://YOUR_USERNAME.github.io/calculator-tools/`

### Option 4: Cloudflare Pages
**Free hosting with global CDN**

1. **Via GitHub:**
   - Push your code to GitHub (see above)
   - Go to https://pages.cloudflare.com
   - Connect your GitHub repository
   - Deploy automatically

### Option 5: Traditional Web Hosting (cPanel, FTP)

1. **Get hosting from providers like:**
   - Bluehost, HostGator, SiteGround, etc.

2. **Upload via FTP:**
   - Use FileZilla or similar FTP client
   - Upload all files from `/Users/muratkahraman/Downloads/dbm/`
   - Upload to `public_html` or `www` directory

## Custom Domain Setup

### For Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### For Vercel:
1. Go to Project settings → Domains
2. Add your custom domain
3. Configure DNS records

### For GitHub Pages:
1. Add a `CNAME` file in your repository with your domain
2. Configure DNS at your domain registrar

## Environment Check

Before deploying, verify:
- ✓ All HTML files present (29 files)
- ✓ CSS file present (styles.css)
- ✓ JavaScript file present (script.js)
- ✓ All links working locally
- ✓ No absolute local paths (all paths are relative)

## Post-Deployment Checklist

After deployment:
- [ ] Test homepage loads correctly
- [ ] Test navigation between pages
- [ ] Test at least 3 calculators
- [ ] Test at least 3 converters
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test on different browsers (Chrome, Firefox, Safari)

## Updating Your Site

### For Netlify/Vercel (GitHub connected):
```bash
cd /Users/muratkahraman/Downloads/dbm
git add .
git commit -m "Update calculator features"
git push
# Site will auto-deploy in ~1 minute
```

### For Drag-and-drop deployments:
- Simply drag and drop the updated folder again
- New deployment will replace the old one

## Performance Tips

Your site is already optimized, but for even better performance:

1. **Add meta tags to each page** (for SEO):
   ```html
   <meta name="description" content="Free online calculator tools - percentages, BMI, conversions, and more">
   <meta name="keywords" content="calculator, converter, percentage, BMI, math tools">
   ```

2. **Consider adding Google Analytics:**
   - Sign up at https://analytics.google.com
   - Add tracking code to each HTML file

3. **Add a robots.txt file** (already included if you use the provided file)

## Troubleshooting

### Issue: Pages not loading
- **Solution**: Check that all file paths are relative (not absolute)
- All your paths are already relative ✓

### Issue: Styles not loading
- **Solution**: Verify `styles.css` is in the root directory
- Already in correct location ✓

### Issue: 404 errors
- **Solution**: Make sure all linked files exist
- All 29 HTML files are present ✓

## Cost

All recommended deployment options are **FREE** with these limits:
- **Netlify**: 100GB bandwidth/month, unlimited sites
- **Vercel**: 100GB bandwidth/month, unlimited sites
- **GitHub Pages**: 100GB bandwidth/month, 1GB storage
- **Cloudflare Pages**: Unlimited bandwidth, unlimited sites

Perfect for a calculator website!

## Recommended: Deploy to Netlify in 2 Minutes

```bash
# Step 1: Go to https://app.netlify.com/drop

# Step 2: Drag this entire folder:
# /Users/muratkahraman/Downloads/dbm

# Step 3: Done! Your site is live
```

---

Need help? Common issues and solutions are in the Troubleshooting section above.

**Your website is 100% ready for deployment!** 🚀
