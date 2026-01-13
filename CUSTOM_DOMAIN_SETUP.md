# 🌐 Custom Domain Setup - bestcalculators.online

## Step-by-Step Guide to Connect Your Domain

### Step 1: Add Domain to Netlify (2 minutes)

1. **Go to Your Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Click on your site: `calculator-tools`

2. **Add Custom Domain**
   - Go to **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter: `bestcalculators.online`
   - Click **"Verify"**
   - Netlify will ask if you own the domain → Click **"Yes, add domain"**

3. **Add www Subdomain (Recommended)**
   - Click **"Add domain alias"**
   - Enter: `www.bestcalculators.online`
   - Click **"Add domain"**

**Result:** Netlify will now show DNS configuration instructions.

---

### Step 2: Configure DNS at Your Domain Registrar (5 minutes)

You need to update DNS records where you bought your domain. Choose your registrar below:

#### Option A: Netlify DNS (Recommended - Easiest)

**Advantages:**
- Automatic SSL certificate
- Fastest setup
- No manual DNS configuration
- Free

**Steps:**
1. In Netlify Domain Management, click **"Use Netlify DNS"**
2. Netlify will provide **4 nameservers** like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
3. Go to your domain registrar (where you bought the domain)
4. Find **Nameservers** or **DNS Settings**
5. **Replace** existing nameservers with Netlify's 4 nameservers
6. Save changes

**Propagation time:** 1-24 hours (usually 1-2 hours)

---

#### Option B: Keep Your Current DNS Provider

If you want to keep using your registrar's DNS:

**DNS Records to Add:**

**For root domain (bestcalculators.online):**
```
Type: A
Name: @ (or leave blank)
Value: 75.2.60.5
TTL: 3600
```

**For www subdomain (www.bestcalculators.online):**
```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
TTL: 3600
```

**Example:** If your Netlify site is `calculator-tools.netlify.app`, the CNAME value would be `calculator-tools.netlify.app`

---

### Step 3: Configure DNS at Common Registrars

#### GoDaddy
1. Log in to: https://dcc.godaddy.com
2. Click on your domain: `bestcalculators.online`
3. Click **"DNS"** or **"Manage DNS"**

**For Netlify DNS (Option A):**
- Scroll to **Nameservers**
- Click **"Change"** → **"Enter my own nameservers"**
- Enter all 4 Netlify nameservers
- Save

**For Manual DNS (Option B):**
- Click **"Add"** under DNS Records
- Add A record: `@ → 75.2.60.5`
- Add CNAME record: `www → calculator-tools.netlify.app`
- Save all records

#### Namecheap
1. Log in to: https://namecheap.com
2. Dashboard → **"Domain List"** → Click **"Manage"** next to your domain

**For Netlify DNS (Option A):**
- Click **"Nameservers"** dropdown
- Select **"Custom DNS"**
- Enter all 4 Netlify nameservers
- Click checkmark to save

**For Manual DNS (Option B):**
- Click **"Advanced DNS"**
- Add A Record: `@ → 75.2.60.5`
- Add CNAME Record: `www → calculator-tools.netlify.app`
- Save all changes

#### Cloudflare
1. Log in to: https://dash.cloudflare.com
2. Select your domain: `bestcalculators.online`
3. Go to **DNS** tab

**For Manual DNS (Option B):**
- Click **"Add record"**
- Add A record:
  - Type: A
  - Name: @
  - IPv4 address: 75.2.60.5
  - Proxy status: DNS only (gray cloud)
- Add CNAME record:
  - Type: CNAME
  - Name: www
  - Target: calculator-tools.netlify.app
  - Proxy status: DNS only (gray cloud)
- Save

**Note:** Cloudflare acts as a proxy, so you can't use Netlify DNS if your domain is already on Cloudflare.

#### Google Domains
1. Log in to: https://domains.google.com
2. Click on your domain
3. Click **"DNS"** in the left menu

**For Netlify DNS (Option A):**
- Click **"Use custom name servers"**
- Enter all 4 Netlify nameservers
- Save

**For Manual DNS (Option B):**
- Scroll to **"Custom resource records"**
- Add A record: `@ → 75.2.60.5`
- Add CNAME record: `www → calculator-tools.netlify.app`
- Save

#### Other Registrars
Look for these sections in your registrar's dashboard:
- **"DNS Management"**
- **"DNS Settings"**
- **"Nameservers"**
- **"Zone File"**
- **"Advanced DNS"**

Then follow the instructions for either Option A (Netlify DNS) or Option B (Manual DNS) above.

---

### Step 4: Wait for DNS Propagation (1-24 hours)

DNS changes take time to propagate worldwide.

**Check propagation status:**
- Visit: https://www.whatsmydns.net/#A/bestcalculators.online
- Should show Netlify's IP: `75.2.60.5`
- Check multiple locations around the world

**Typical propagation times:**
- Netlify DNS: 1-2 hours
- Manual DNS: 2-24 hours
- Full global propagation: Up to 48 hours

**During propagation:**
- Some people see old site, some see new site (normal!)
- Don't make more DNS changes while waiting
- Be patient - it will work!

---

### Step 5: Enable HTTPS/SSL (Automatic)

Once DNS propagates, Netlify automatically provisions SSL certificate.

**In Netlify Dashboard:**
1. Go to **Site settings** → **Domain management**
2. Under **HTTPS**, you'll see:
   - "Provisioning certificate..." (wait a few minutes)
   - Then: "Certificate issued ✓"

**Force HTTPS redirect:**
1. Scroll to **HTTPS** section
2. Enable **"Force HTTPS"**
3. This redirects `http://` → `https://` automatically

**Your site will then be accessible at:**
- ✅ https://bestcalculators.online
- ✅ https://www.bestcalculators.online
- ✅ Automatic redirect from http to https

---

## 🎯 Quick Setup Summary

### Recommended Path (Netlify DNS):

```
1. Netlify: Add domain → Use Netlify DNS
2. Copy 4 nameservers from Netlify
3. Go to your registrar → Update nameservers
4. Wait 1-2 hours
5. Done! SSL auto-configured
```

### Alternative Path (Manual DNS):

```
1. Netlify: Add domain → Configure DNS manually
2. Go to your registrar → Add DNS records:
   - A record: @ → 75.2.60.5
   - CNAME: www → calculator-tools.netlify.app
3. Wait 2-24 hours
4. Netlify auto-provisions SSL
5. Done!
```

---

## ✅ Verification Checklist

After setup, verify everything works:

**Test these URLs:**
- [ ] http://bestcalculators.online (should redirect to https)
- [ ] https://bestcalculators.online (should work)
- [ ] http://www.bestcalculators.online (should redirect to https)
- [ ] https://www.bestcalculators.online (should work)

**Check features:**
- [ ] All calculators load correctly
- [ ] Google Analytics tracking works
- [ ] Mobile responsive design
- [ ] SSL certificate shows as secure (padlock icon)

---

## 🔧 Troubleshooting

### "Domain not found" or "Can't reach this page"

**Causes:**
- DNS not propagated yet → Wait longer (up to 24 hours)
- Wrong DNS records → Double-check A record and CNAME
- Nameservers not updated → Verify at registrar

**Check DNS:**
```bash
# Check A record
dig bestcalculators.online

# Check CNAME record
dig www.bestcalculators.online

# Should show Netlify's IP or CNAME
```

### "Not secure" warning or SSL error

**Causes:**
- SSL certificate not issued yet → Wait 10-30 minutes after DNS propagates
- Force HTTPS not enabled → Enable in Netlify dashboard

**Solution:**
1. Wait for DNS to fully propagate
2. Netlify auto-provisions certificate within 24 hours
3. If still issues after 24 hours, go to Netlify: Domain management → HTTPS → "Renew certificate"

### "This site can't provide a secure connection"

**Cause:** SSL certificate pending

**Solution:**
- Wait for DNS propagation to complete
- Check Netlify dashboard: HTTPS section should show "Certificate issued"
- Can take up to 24 hours after DNS propagates

### Multiple sites showing up

**Cause:** Old DNS records pointing elsewhere

**Solution:**
- Remove all old A, AAAA, and CNAME records
- Only keep Netlify's records
- Wait for propagation

### www vs non-www not working

**Solution:**
- Make sure you added BOTH domains in Netlify:
  - bestcalculators.online
  - www.bestcalculators.online
- Set one as primary (Netlify → Domain management → "Set as primary domain")
- The non-primary will auto-redirect to primary

---

## 📊 After Your Domain is Live

### 1. Update Google Analytics (if needed)
Most GA setups work automatically, but verify:
- Go to: https://analytics.google.com
- Check that your new domain shows traffic
- Property settings should auto-detect new domain

### 2. Update Google Search Console
- Go to: https://search.google.com/search-console
- Add new property: `https://bestcalculators.online`
- Verify ownership (Netlify DNS makes this easy)
- Submit new sitemap: `https://bestcalculators.online/sitemap.xml`

### 3. Update Google AdSense
- Go to: https://adsense.google.com
- Update your site URL in account settings
- Re-verify if needed
- Ads will continue working automatically

### 4. Create Sitemap (Important for SEO)
Create `sitemap.xml` in your root directory with all your URLs.

**I can help you create this!** Let me know if you need it.

### 5. Social Media
- Update links on Twitter, Facebook, LinkedIn
- Share your new domain: bestcalculators.online
- Update email signatures
- Update business cards

---

## 🎨 Optional: Set Primary Domain

Netlify lets you choose which version is primary:
- `bestcalculators.online` (without www)
- `www.bestcalculators.online` (with www)

**Recommendation:** Use **without www** (cleaner, shorter)

**To set:**
1. Netlify → Domain management
2. Click "Options" next to your preferred domain
3. Click **"Set as primary domain"**
4. All other versions redirect to primary

---

## 💡 Pro Tips

### 1. Use Netlify DNS
Easiest and most reliable. No manual DNS record management.

### 2. Enable Force HTTPS
Always redirect http → https for security and SEO.

### 3. Add www Version
Some users type www, so make sure it works:
- Add as domain alias in Netlify
- Set up redirect to primary domain

### 4. Monitor SSL Certificate
Netlify auto-renews, but check occasionally:
- Domain management → HTTPS
- Should show "Certificate issued" and expiry date

### 5. Set Up Email Forwarding
Most registrars offer email forwarding:
- Forward: `contact@bestcalculators.online` → your-email@gmail.com
- Free and professional!

---

## 🚀 Your Final URLs

Once configured, your site will be accessible at:

**Primary:** https://bestcalculators.online
**With www:** https://www.bestcalculators.online
**Old Netlify URL:** https://calculator-tools.netlify.app (still works!)

**All of these redirect to your primary domain!**

---

## 📞 Support

### Domain Registrar Support
- **GoDaddy:** https://www.godaddy.com/help
- **Namecheap:** https://www.namecheap.com/support/
- **Google Domains:** https://support.google.com/domains
- **Cloudflare:** https://support.cloudflare.com

### Netlify Support
- **Docs:** https://docs.netlify.com/domains-https/custom-domains/
- **Forum:** https://answers.netlify.com
- **Support:** https://www.netlify.com/support/

### DNS Help
- **DNS Propagation Checker:** https://www.whatsmydns.net
- **DNS Lookup Tool:** https://mxtoolbox.com/DNSLookup.aspx

---

## ✨ You're Almost Live!

**Current status:**
✅ Domain purchased: bestcalculators.online
✅ Code on GitHub: https://github.com/kahramanmurat/calculator-tools
✅ Ready to connect to Netlify

**Next steps:**
1. Add domain in Netlify (2 minutes)
2. Update DNS records (5 minutes)
3. Wait for propagation (1-24 hours)
4. Your site is live at bestcalculators.online! 🎉

**Setup time:** 7 minutes of work + waiting for DNS

**Let's do this!** 🚀

---

**Domain:** bestcalculators.online
**Status:** Ready to configure
**Setup Method:** Netlify DNS (recommended) or Manual DNS
**Expected Live Time:** 1-24 hours after DNS update
