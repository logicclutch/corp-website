# Resend Email Setup Instructions

## 1. Create Resend Account

### Step 1: Sign Up
1. Go to [resend.com](https://resend.com)
2. Click "Get Started" or "Sign Up"
3. Create your account with email/password or GitHub

### Step 2: Verify Your Email
1. Check your email for verification link
2. Click the verification link to activate your account

## 2. Add Your Domain

### Step 3: Add Domain
1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain: `logicclutch.com`
4. Click **"Add"**

### Step 4: Verify Domain (DNS Setup)
You'll need to add DNS records to your domain. Resend will show you exactly what to add:

**Typical DNS Records:**
\`\`\`
Type: TXT
Name: @
Value: resend-verification=abc123... (Resend will provide this)

Type: MX
Name: @
Value: feedback-smtp.resend.com
Priority: 10

Type: TXT  
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: TXT
Name: resend._domainkey
Value: (DKIM key provided by Resend)
\`\`\`

**How to Add DNS Records:**
- **Hostinger**: Go to hPanel → Domains → DNS Zone Editor
- **Cloudflare**: Go to DNS tab in your domain dashboard
- **Other providers**: Look for DNS management or DNS zone editor

### Step 5: Wait for Verification
- DNS changes can take up to 48 hours
- Resend will automatically verify once DNS propagates
- You'll get an email when verification is complete

## 3. Generate API Key

### Step 6: Create API Key
1. In Resend dashboard, go to **API Keys**
2. Click **"Create API Key"**
3. Name it: `Logic Clutch Website`
4. Select permissions: **"Sending access"**
5. Click **"Add"**
6. **Copy the API key** (starts with `re_...`)

⚠️ **Important**: Save this key immediately - you won't see it again!

## 4. Update Environment Variables

### Step 7: Update Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. **Remove old SMTP variables**:
   - Delete `SMTP_HOST`
   - Delete `SMTP_PORT`
   - Delete `SMTP_SECURE`
   - Delete `SMTP_USER`
   - Delete `SMTP_PASSWORD`

4. **Add new Resend variable**:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_your_api_key_here`
   - **Environments**: Production, Preview, Development

### Step 8: Update Local Environment
Update your `.env.local` file:

\`\`\`env
# Remove old SMTP variables and add:
RESEND_API_KEY=re_your_api_key_here

# Keep other variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 5. Testing

### Step 9: Test Configuration
1. **Redeploy** your Vercel app (or wait for auto-deploy)
2. Visit `/api/contact/verify` to check configuration
3. Test the contact form at `/contact`

### Step 10: Verify Email Delivery
1. Submit a test form
2. Check that you receive the email at `info@logicclutch.com`
3. Check that the auto-reply is sent to the form submitter

## 6. Resend Features & Benefits

### ✅ **Advantages over SMTP**
- **Serverless-friendly**: No connection timeouts
- **Better deliverability**: Professional email infrastructure
- **Real-time tracking**: See delivery status, opens, clicks
- **Easy setup**: Just an API key, no complex SMTP configuration
- **Reliable**: 99.9% uptime SLA

### 📊 **Pricing** (as of 2024)
- **Free tier**: 3,000 emails/month
- **Pro**: $20/month for 50,000 emails
- **Perfect for contact forms**: Free tier is usually sufficient

### 📧 **Email Limits**
- Free: 3,000 emails/month
- Rate limit: 10 emails/second
- Max attachment size: 40MB

## 7. Troubleshooting

### Common Issues:

1. **"RESEND_API_KEY is missing"**
   - Check environment variables in Vercel
   - Make sure you've redeployed after adding the key

2. **"Domain not verified"**
   - Check DNS records are correctly added
   - Wait up to 48 hours for DNS propagation
   - Use [DNS checker tools](https://dnschecker.org) to verify

3. **"403 Forbidden"**
   - Domain verification incomplete
   - API key doesn't have sending permissions

4. **"422 Validation Error"**
   - Check email addresses are valid
   - Ensure "from" address uses your verified domain

### Debug Steps:
1. Check `/api/contact/verify` endpoint
2. Review Vercel function logs
3. Check Resend dashboard for delivery status
4. Verify DNS records are properly set

## 8. Domain Verification Status

You can send emails immediately using Resend's sandbox domain, but for production:

### Before Domain Verification:
- Emails sent from: `onboarding@resend.dev`
- Limited to verified email addresses
- "Via resend.dev" in email headers

### After Domain Verification:
- Emails sent from: `noreply@logicclutch.com`
- Can send to any email address
- Professional appearance

## 9. Alternative: Quick Start (Sandbox)

If you want to test immediately without domain setup:

1. **Skip domain verification** for now
2. **Add your email** to verified addresses in Resend dashboard
3. **Test with your own email** first
4. **Set up domain later** for production

This way you can test the functionality immediately while DNS propagates.

---

## Need Help?

- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)
- **DNS Help**: Contact your domain provider (Hostinger support)
- **Resend Support**: Available in their dashboard

The setup is much simpler than SMTP and more reliable for serverless environments!
