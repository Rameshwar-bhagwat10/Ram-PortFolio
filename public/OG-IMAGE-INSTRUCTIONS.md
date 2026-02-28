# OG Image Generation Instructions

Your portfolio needs an OG (Open Graph) image at `public/og-image.png` (1200x630px) for social media sharing and SEO.

## Quick Method (Recommended)

### Option 1: Screenshot the HTML Template
1. Open `public/og-image-template.html` in your browser
2. Press F12 to open DevTools
3. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
4. Type "screenshot" and select "Capture full size screenshot"
5. Save as `public/og-image.png`

### Option 2: Online Converter
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `public/og-image.svg`
3. Set width to 1200px
4. Download and save as `public/og-image.png`

### Option 3: Use Figma/Canva (Best Quality)
Create a 1200x630px design with:
- Background: #0F0E0E (dark)
- Title: "Rameshwar Bhagwat" (large, gradient orange to pink)
- Subtitle: "Full Stack & AI Developer"
- Description: "Building scalable AI-powered SaaS platforms"
- Tech badges: React, Next.js, TypeScript, AI/ML
- URL: rameshwarbhagwat.me (bottom)

## Verify OG Image

After creating the image:
1. Place it at `public/og-image.png`
2. Test with: https://www.opengraph.xyz/
3. Enter: https://rameshwarbhagwat.me
4. Check if image displays correctly

## Current Status

✅ OG image reference added to metadata
✅ SVG template created
✅ HTML template created
⏳ PNG file needs to be generated (follow instructions above)

Once `og-image.png` is created, your SEO setup will be complete!
