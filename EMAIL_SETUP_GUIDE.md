# 📧 Email Integration Setup Guide

## 🚀 EmailJS Setup (Recommended)

EmailJS is perfect for portfolios because it's:
- **Free** (up to 200 emails/month)
- **No backend required**
- **Easy to setup**
- **Reliable**

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template structure:

```html
Hello,

You have received a new message from your portfolio contact form:

From: {{name}} ({{email}})
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key**

### Step 5: Configure Environment Variables

1. **Create/Update your `.env` file** in the project root:
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

2. **Replace the placeholder values** with your actual EmailJS credentials:
   - `your_actual_service_id` ← Replace with your Service ID
   - `your_actual_template_id` ← Replace with your Template ID  
   - `your_actual_public_key` ← Replace with your Public Key

3. **Restart your development server** after updating the `.env` file:
```bash
npm run dev
```

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the frontend. The Contact.jsx file is already configured to use these variables with `import.meta.env.VITE_*`.

## 🎯 Alternative Options

### Option 2: Formspree (Easy Alternative)
- Free tier: 50 submissions/month
- No coding required
- Just change form action

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* your form fields */}
</form>
```

### Option 3: Netlify Forms (If hosting on Netlify)
- Free tier: 100 submissions/month
- Add `netlify` attribute to form

```jsx
<form name="contact" method="POST" data-netlify="true">
  {/* your form fields */}
</form>
```

### Option 4: Backend Solution (Advanced)
If you want more control, you can create a backend with:
- **Node.js + Express + Nodemailer**
- **Vercel Functions**
- **Netlify Functions**

## 🛠️ Testing Your Setup

1. Fill out your contact form
2. Submit the message
3. Check your email inbox
4. Verify the message format looks good

## 🔧 Troubleshooting

### Common Issues:

1. **"process is not defined" error**
   - ✅ **Fixed!** Environment variables now use `import.meta.env.VITE_*`
   - Make sure your `.env` variables start with `VITE_`
   - Restart your dev server after updating `.env`

2. **"Failed to send message"**
   - Check Service ID, Template ID, and Public Key in `.env`
   - Verify EmailJS service is connected properly
   - Check browser console for detailed error messages

3. **Environment variables are undefined**
   - Ensure `.env` file is in the project root (not in src folder)
   - Variable names must start with `VITE_`
   - Restart development server: `npm run dev`

4. **Emails not received**
   - Check spam folder
   - Verify email service connection
   - Test with a different email address

5. **Template variables not working**
   - Ensure form field `name` attributes match template variables
   - Current template variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`

## 🎨 Customization Ideas

- Add email validation
- Add success/error animations
- Add file attachment support
- Add auto-reply functionality
- Add form field validation

## 📊 EmailJS Free Tier Limits
- **200 emails/month**
- **2 email services**
- **3 email templates**
- **Basic support**

Perfect for portfolio websites! 🚀

---

**Need help?** Check the [EmailJS documentation](https://www.emailjs.com/docs/) or their support.