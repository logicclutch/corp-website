# Hostinger Email Setup Instructions

## 1. Hostinger Email Configuration

### Step 1: Get Your Email Credentials
1. Log in to your Hostinger control panel (hPanel)
2. Go to **Email** section
3. Find your email account: `info@logicclutch.com`
4. Note down the password (or reset if needed)

### Step 2: SMTP Settings for Hostinger
Hostinger typically uses these SMTP settings:

**Primary Settings:**
- **SMTP Server**: `smtp.hostinger.com`
- **Port**: `587` (STARTTLS)
- **Security**: STARTTLS
- **Username**: `info@logicclutch.com`
- **Password**: Your email password

**Alternative Settings (if primary doesn't work):**
- **SMTP Server**: `smtp.hostinger.in`
- **Port**: `465` (SSL)
- **Security**: SSL/TLS
- **Username**: `info@logicclutch.com`
- **Password**: Your email password

### Step 3: Update Environment Variables
Create or update `.env.local` file:

\`\`\`env
# Primary Hostinger SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@logicclutch.com
SMTP_PASSWORD=your-actual-email-password

# If primary doesn't work, try these alternative settings:
# SMTP_HOST=smtp.hostinger.in
# SMTP_PORT=465
# SMTP_SECURE=true
\`\`\`

## 2. Production Deployment

For production, add these environment variables to your hosting platform:

### Vercel
1. Go to your project dashboard
2. Navigate to Settings > Environment Variables
3. Add:
   - `SMTP_HOST`: `smtp.hostinger.com`
   - `SMTP_PORT`: `587`
   - `SMTP_SECURE`: `false`
   - `SMTP_USER`: `info@logicclutch.com`
   - `SMTP_PASSWORD`: Your email password

### Other Platforms
Add the same environment variables to your deployment platform.

## 3. Testing

### Local Testing
1. Start the development server: `npm run dev`
2. Visit `/api/contact/verify` to check email configuration
3. Test the contact form at `/contact`

### Production Testing
1. Deploy your application
2. Test the contact form with a real email
3. Check that emails are received at info@logicclutch.com

## 4. Troubleshooting

### Common Hostinger SMTP Issues:

1. **"Authentication failed"**
   - Verify email password in Hostinger hPanel
   - Make sure the email account exists and is active
   - Try resetting the email password

2. **"Connection timeout"**
   - Try alternative SMTP settings:
     \`\`\`env
     SMTP_HOST=smtp.hostinger.in
     SMTP_PORT=465
     SMTP_SECURE=true
     \`\`\`

3. **"Certificate error"**
   - Add TLS configuration (already included in code)
   - Try different port (587 vs 465)

4. **"Relay access denied"**
   - Ensure you're using the correct email address as SMTP_USER
   - Verify the email account has SMTP access enabled

### Debug Steps:
1. Check `/api/contact/verify` endpoint for configuration status
2. Review server logs for detailed error messages
3. Test with a simple email client first (like Thunderbird)
4. Contact Hostinger support if issues persist

### Hostinger-Specific Notes:
- Some Hostinger accounts may have SMTP restrictions
- Business/Premium plans typically have better SMTP support
- Check if your hosting plan includes email services
- Verify that your domain's MX records are properly configured

## 5. Email Flow

### What happens when form is submitted:
1. **Form Validation**: Client and server-side validation
2. **Email to Logic Clutch**: Professional email sent to `info@logicclutch.com`
3. **Auto-reply**: Thank you email sent to the user from `info@logicclutch.com`
4. **Error Handling**: Proper error messages for failed submissions

### Email Features:
- **Professional Templates**: HTML formatted with Logic Clutch branding
- **Indian Time Zone**: Timestamps in IST
- **Reply-To Header**: Users can reply directly to form submissions
- **Dual Email System**: Both notification and auto-reply emails

## 6. Security Features

- Environment variable protection
- Input validation and sanitization
- TLS encryption for email transmission
- Proper error handling without exposing credentials
- Rate limiting can be added if needed

## 7. Alternative Email Services

If Hostinger SMTP doesn't work reliably, consider these alternatives:
- **SendGrid**: Professional email service with good deliverability
- **Mailgun**: Reliable transactional email service
- **Amazon SES**: Cost-effective email service
- **Postmark**: High-deliverability email service

Contact your hosting provider or system administrator if you continue to experience issues.
