# Email Setup Instructions

## 1. Gmail App Password Setup

To send emails from the contact form, you need to set up Gmail App Passwords:

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to Google Account > Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Logic Clutch Website" as the name
5. Copy the generated 16-character password

### Step 3: Update Environment Variables
Create or update `.env.local` file:

\`\`\`env
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
\`\`\`

## 2. Production Deployment

For production, add these environment variables to your hosting platform:

### Vercel
1. Go to your project dashboard
2. Navigate to Settings > Environment Variables
3. Add:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: Your app password

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

## 4. Email Features

### What happens when form is submitted:
1. **Validation**: Form data is validated on both client and server
2. **Email to Logic Clutch**: Formatted email sent to info@logicclutch.com
3. **Auto-reply**: Thank you email sent to the user
4. **Error Handling**: Proper error messages for failed submissions

### Email Templates:
- **Contact Email**: Professional HTML template with all form data
- **Auto-reply**: Branded thank you email with company information

## 5. Security Features

- Input validation using Zod
- Rate limiting (can be added)
- Sanitized HTML output
- Environment variable protection
- Error logging without exposing sensitive data

## 6. Troubleshooting

### Common Issues:
1. **"Invalid login"**: Check Gmail credentials and app password
2. **"Network error"**: Check internet connection and API endpoint
3. **"Email not received"**: Check spam folder and Gmail settings

### Debug Steps:
1. Check `/api/contact/verify` endpoint
2. Review server logs for errors
3. Verify environment variables are set correctly
4. Test with a different Gmail account if needed
