# Airtable Waitlist Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Airtable Account
1. Go to [airtable.com](https://airtable.com) and sign up for free
2. Create a new base called "Waitlist" or "HRCounsel Waitlist"

### Step 2: Create Table Structure
Create a table with these columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| Email | Single line text | User's email address |
| Role | Single select | User's role (HR Professional, Startup Founder, etc.) |
| Signup Date | Date | When they signed up |
| IP Address | Single line text | User's IP address |

**Single Select Options for Role:**
- HR Professional
- Startup Founder  
- Enterprise Executive
- Legal Counsel
- Other

### Step 3: Get API Credentials
1. Go to [airtable.com/account](https://airtable.com/account)
2. Click "Generate new token"
3. Name it "Waitlist API"
4. Give it access to your waitlist base
5. Copy the token (starts with `pat...`)

### Step 4: Get Base ID
1. Go to [airtable.com/api](https://airtable.com/api)
2. Select your waitlist base
3. Copy the Base ID (starts with `app...`)

### Step 5: Set Environment Variables
Add these to your `.env.local` file:

```env
AIRTABLE_API_KEY=pat_your_token_here
AIRTABLE_BASE_ID=app_your_base_id_here
AIRTABLE_TABLE_NAME=Waitlist
```

### Step 6: Deploy to Vercel
1. Add the same environment variables to your Vercel project
2. Deploy your changes

## 🎯 What You Get

- **Real data storage** in Airtable
- **Duplicate email prevention**
- **Admin view** via GET `/api/waitlist`
- **Automatic timestamps**
- **IP tracking**
- **Free tier**: 1,200 records/month

## 📊 Viewing Your Waitlist

- **Airtable Interface**: View and manage directly in Airtable
- **API Endpoint**: Visit `/api/waitlist` to see JSON data
- **Export**: Export from Airtable to CSV/Excel

## 🔧 Fallback Behavior

If Airtable isn't configured, the form will:
- Still work and show success message
- Log entries to console (for development)
- Not store data permanently

## 🚨 Troubleshooting

**"Email already registered" error:**
- Check if email exists in your Airtable
- The system prevents duplicate signups

**"Invalid email format" error:**
- Email must be valid format (user@domain.com)

**"Invalid role selection" error:**
- Role must be one of the predefined options

**API errors:**
- Check your Airtable API token permissions
- Verify Base ID is correct
- Ensure table name matches exactly

## 💡 Pro Tips

1. **Test locally first** with `.env.local`
2. **Use Airtable's views** to filter by role, date, etc.
3. **Set up notifications** in Airtable for new signups
4. **Export regularly** as backup
5. **Monitor usage** to stay within free tier limits

## 📈 Scaling Up

If you exceed Airtable's free tier:
- **Upgrade Airtable** ($20/month for 5,000 records)
- **Switch to Supabase** (free tier: 50,000 records)
- **Use Google Sheets API** (free with Google account)
- **Build custom database** (PostgreSQL, etc.)
