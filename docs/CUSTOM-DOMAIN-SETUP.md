# 🌐 Custom Domain Setup Guide for Vercel

## Overview

This guide will help you add a custom domain (like `rameshwarbhagwat.com`) to your portfolio hosted on Vercel.

---

## 📋 Prerequisites

Before starting, you need:
- ✅ Portfolio deployed on Vercel
- ✅ A domain name (purchased or free)

---

## 💰 Getting a Domain

### Option 1: Buy a Domain (Recommended)

**Popular Registrars:**

1. **Namecheap** (https://namecheap.com)
   - Cost: $8-15/year
   - Easy DNS management
   - Good support

2. **GoDaddy** (https://godaddy.com)
   - Cost: $10-20/year
   - Popular choice
   - Frequent sales

3. **Cloudflare** (https://cloudflare.com)
   - Cost: At-cost pricing (~$9/year)
   - Best for developers
   - Free SSL and CDN

4. **Google Domains** (https://domains.google) - Now Squarespace
   - Cost: $12/year
   - Clean interface
   - Google integration

**Suggested Domain Names:**
- `rameshwarbhagwat.com`
- `rameshwar.dev`
- `rbhagwat.com`
- `rameshwarb.tech`

### Option 2: Free Domain

**Free Options:**
1. **Freenom** (https://freenom.com)
   - Free `.tk`, `.ml`, `.ga`, `.cf`, `.gq` domains
   - Not professional for portfolio
   - Good for testing

2. **GitHub Student Pack** (if you're a student)
   - Free `.me` domain for 1 year
   - Visit: https://education.github.com/pack

---

## 🚀 Adding Domain to Vercel (Step-by-Step)

### Step 1: Access Domain Settings in Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your portfolio project
3. Click **"Settings"** tab (top navigation)
4. Click **"Domains"** in the left sidebar

### Step 2: Add Your Domain

1. In the "Domains" section, you'll see a text input
2. Enter your domain name:
   - For root domain: `rameshwarbhagwat.com`
   - For subdomain: `www.rameshwarbhagwat.com`
   - For both: Add them separately

3. Click **"Add"**

### Step 3: Choose Domain Type

Vercel will ask you to configure the domain. You'll see options:

**Option A: Add both `rameshwarbhagwat.com` and `www.rameshwarbhagwat.com`**
- Recommended for best coverage
- Users can access via both URLs

**Option B: Add only root domain `rameshwarbhagwat.com`**
- Simpler setup
- Redirect www to root

**Option C: Add only `www.rameshwarbhagwat.com`**
- Less common
- Redirect root to www

**Recommendation**: Add both, set root as primary

---

## 🔧 Configure DNS Records

After adding the domain, Vercel will show you DNS records to add. You need to configure these in your domain registrar.

### DNS Records You'll Need

Vercel will show something like this:

#### For Root Domain (`rameshwarbhagwat.com`):

**Option 1: A Record (Most Common)**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or Automatic)
```

**Option 2: CNAME Record (If A record not supported)**
```
Type: CNAME
Name: @ (or leave blank)
Value: cname.vercel-dns.com
TTL: 3600
```

#### For WWW Subdomain (`www.rameshwarbhagwat.com`):

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## 📝 Configuring DNS at Your Registrar

### For Namecheap:

1. **Login to Namecheap**
2. Go to **"Domain List"**
3. Click **"Manage"** next to your domain
4. Click **"Advanced DNS"** tab
5. Click **"Add New Record"**

**Add A Record:**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21`
- TTL: `Automatic`
- Click **"Save"**

**Add CNAME Record:**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: `Automatic`
- Click **"Save"**

### For GoDaddy:

1. **Login to GoDaddy**
2. Go to **"My Products"**
3. Click **"DNS"** next to your domain
4. Click **"Add"** button

**Add A Record:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `1 Hour`
- Click **"Save"**

**Add CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `1 Hour`
- Click **"Save"**

### For Cloudflare:

1. **Login to Cloudflare**
2. Select your domain
3. Go to **"DNS"** tab
4. Click **"Add record"**

**Add A Record:**
- Type: `A`
- Name: `@`
- IPv4 address: `76.76.21.21`
- Proxy status: `Proxied` (orange cloud)
- Click **"Save"**

**Add CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Target: `cname.vercel-dns.com`
- Proxy status: `Proxied`
- Click **"Save"**

### For Google Domains / Squarespace:

1. **Login to Google Domains**
2. Click on your domain
3. Go to **"DNS"** tab
4. Scroll to **"Custom resource records"**

**Add A Record:**
- Name: `@`
- Type: `A`
- TTL: `1H`
- Data: `76.76.21.21`
- Click **"Add"**

**Add CNAME Record:**
- Name: `www`
- Type: `CNAME`
- TTL: `1H`
- Data: `cname.vercel-dns.com`
- Click **"Add"**

---

## ⏱️ Wait for DNS Propagation

After adding DNS records:

- **Typical wait time**: 10 minutes to 48 hours
- **Average**: 1-2 hours
- **Check status**: Use https://dnschecker.org

### Check DNS Propagation:

1. Go to https://dnschecker.org
2. Enter your domain: `rameshwarbhagwat.com`
3. Select type: `A`
4. Click **"Search"**
5. Should show `76.76.21.21` globally

---

## ✅ Verify Domain in Vercel

After DNS propagates:

1. Go back to Vercel Dashboard → Your Project → Settings → Domains
2. Your domain should show:
   - ✅ **Valid Configuration** (green checkmark)
   - Or **Pending** (yellow, still propagating)
   - Or **Invalid Configuration** (red, check DNS)

3. Once valid, Vercel automatically:
   - ✅ Provisions SSL certificate (HTTPS)
   - ✅ Enables automatic redirects
   - ✅ Sets up CDN

---

## 🔐 SSL Certificate (HTTPS)

Vercel automatically provides free SSL certificates:

- **Issued by**: Let's Encrypt
- **Renewal**: Automatic
- **Setup time**: 1-5 minutes after DNS validation
- **Result**: Your site will be accessible via `https://`

You don't need to do anything - it's automatic!

---

## 🔄 Update Environment Variables

After domain is active, update your environment variables:

### In Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Find `NEXT_PUBLIC_APP_URL`
3. Click **"Edit"**
4. Change value to: `https://rameshwarbhagwat.com`
5. Click **"Save"**

### Also Update:

- `NEXT_PUBLIC_SITE_URL` → `https://rameshwarbhagwat.com`
- `SMTP_FROM` → `noreply@rameshwarbhagwat.com` (optional)
- `ADMIN_EMAIL` → Keep as is or update

### Redeploy:

1. Go to **Deployments** tab
2. Click **"Redeploy"** on latest deployment
3. Wait 2 minutes

---

## 🎯 Set Primary Domain

If you added multiple domains (root + www):

1. Go to **Settings** → **Domains**
2. Find your preferred domain (e.g., `rameshwarbhagwat.com`)
3. Click **three dots (...)** next to it
4. Click **"Set as Primary"**
5. All other domains will redirect to this one

**Recommendation**: Set root domain (`rameshwarbhagwat.com`) as primary

---

## 🧪 Testing Your Domain

After setup is complete:

### 1. Test Root Domain
```
Visit: https://rameshwarbhagwat.com
Should: Load your portfolio with HTTPS
```

### 2. Test WWW Subdomain
```
Visit: https://www.rameshwarbhagwat.com
Should: Redirect to root or load portfolio
```

### 3. Test HTTP Redirect
```
Visit: http://rameshwarbhagwat.com
Should: Redirect to https://rameshwarbhagwat.com
```

### 4. Test Old Vercel URL
```
Visit: https://your-project.vercel.app
Should: Redirect to your custom domain
```

### 5. Check SSL Certificate
```
Click padlock icon in browser
Should show: Valid certificate for your domain
```

---

## 🔍 Troubleshooting

### Issue: "Invalid Configuration" in Vercel

**Solution:**
1. Double-check DNS records in your registrar
2. Ensure A record points to `76.76.21.21`
3. Ensure CNAME points to `cname.vercel-dns.com`
4. Wait 1-2 hours for propagation
5. Use https://dnschecker.org to verify

### Issue: Domain Not Resolving

**Solution:**
1. Check DNS propagation: https://dnschecker.org
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode
4. Try different browser
5. Wait 24-48 hours for full propagation

### Issue: SSL Certificate Not Working

**Solution:**
1. Wait 5-10 minutes after DNS validation
2. Check Vercel domain status (should be green)
3. Try accessing via `https://` explicitly
4. Clear browser cache
5. If still failing after 1 hour, contact Vercel support

### Issue: Old Vercel URL Still Works

**Solution:**
This is normal! Vercel keeps the `.vercel.app` URL active.

To redirect:
1. Go to Settings → Domains
2. Set your custom domain as primary
3. Vercel will auto-redirect `.vercel.app` to custom domain

### Issue: WWW Not Working

**Solution:**
1. Ensure CNAME record for `www` is added
2. Check it points to `cname.vercel-dns.com`
3. Add `www.yourdomain.com` separately in Vercel
4. Wait for DNS propagation

---

## 📊 After Domain Setup

### Update Your Profiles:

1. **GitHub Profile**
   - Add website: `https://rameshwarbhagwat.com`

2. **LinkedIn**
   - Update contact info with new URL

3. **Resume**
   - Update portfolio link

4. **Email Signature**
   - Add portfolio link

### Submit to Search Engines:

1. **Google Search Console**
   - Add new property with custom domain
   - Submit sitemap: `https://rameshwarbhagwat.com/sitemap.xml`

2. **Bing Webmaster Tools**
   - Add site
   - Submit sitemap

---

## 💡 Pro Tips

### 1. Use Root Domain as Primary
- Shorter and cleaner
- Better for SEO
- Easier to remember

### 2. Enable Vercel Analytics
- Go to Analytics tab in Vercel
- Free for hobby projects
- Track page views and performance

### 3. Set Up Email Forwarding
- Many registrars offer free email forwarding
- Forward `contact@rameshwarbhagwat.com` to your Gmail
- Looks more professional

### 4. Consider Cloudflare
- Free CDN and DDoS protection
- Better performance globally
- Advanced caching options

### 5. Monitor Uptime
- Use services like UptimeRobot (free)
- Get alerts if site goes down
- Track availability

---

## 📋 Quick Checklist

After completing setup:

- [ ] Domain purchased
- [ ] A record added (@ → 76.76.21.21)
- [ ] CNAME record added (www → cname.vercel-dns.com)
- [ ] DNS propagated (check dnschecker.org)
- [ ] Domain shows "Valid" in Vercel
- [ ] SSL certificate active (HTTPS works)
- [ ] Environment variables updated
- [ ] Project redeployed
- [ ] Primary domain set
- [ ] All URLs redirect correctly
- [ ] Profiles updated with new URL
- [ ] Sitemap submitted to search engines

---

## 🎉 You're Done!

Your portfolio is now accessible at your custom domain with:
- ✅ HTTPS encryption
- ✅ Automatic redirects
- ✅ Global CDN
- ✅ Professional URL

Share your portfolio: `https://rameshwarbhagwat.com` 🚀

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains
- **Vercel Support**: https://vercel.com/support
- **DNS Checker**: https://dnschecker.org
- **SSL Checker**: https://www.ssllabs.com/ssltest/

---

**Last Updated**: February 27, 2026
**Estimated Setup Time**: 15-30 minutes (+ DNS propagation)
**Difficulty**: Beginner-friendly
