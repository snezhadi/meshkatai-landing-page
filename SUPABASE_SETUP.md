# Supabase Waitlist Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com) and sign up for free
2. Click "New Project"
3. Choose your organization and enter project details:
   - **Name**: `HRCounsel Waitlist` (or any name you prefer)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your users
4. Click "Create new project"

### Step 2: Create Database Table
1. Go to **SQL Editor** in your Supabase dashboard
2. Click "New query"
3. Run this SQL to create the waitlist table:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index for faster date sorting
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- Add row level security (optional but recommended)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for your API)
CREATE POLICY "Allow waitlist inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (for your API)
CREATE POLICY "Allow waitlist reads" ON waitlist
  FOR SELECT USING (true);
```

4. Click "Run" to execute the SQL

### Step 3: Get API Credentials
1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy these values:

**Project URL:**
```
https://your-project-id.supabase.co
```

**Service Role Key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (long string)
```

### Step 4: Set Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Step 5: Deploy to Vercel
1. Add the same environment variables to your Vercel project
2. Deploy your changes

## 🎯 What You Get

- **Real PostgreSQL database** with 500MB free storage
- **50,000 records** in free tier
- **Duplicate email prevention** (unique constraint)
- **Admin view** via GET `/api/waitlist`
- **Automatic timestamps**
- **IP tracking**
- **SQL queries** for advanced analytics
- **Real-time subscriptions** (if needed later)

## 📊 Viewing Your Waitlist

### **Supabase Dashboard:**
1. Go to **Table Editor** in your dashboard
2. Click on the `waitlist` table
3. View, edit, and manage your data

### **API Endpoint:**
Visit `/api/waitlist` to see JSON data:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "email": "user@example.com",
      "role": "hr-professional",
      "ip_address": "192.168.1.1",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

### **SQL Queries:**
Run custom queries in the SQL Editor:
```sql
-- Count signups by role
SELECT role, COUNT(*) as count 
FROM waitlist 
GROUP BY role;

-- Recent signups
SELECT * FROM waitlist 
ORDER BY created_at DESC 
LIMIT 10;
```

## 🔧 Fallback Behavior

If Supabase isn't configured, the form will:
- Still work and show success message
- Log entries to console (for development)
- Not store data permanently

## 🚨 Troubleshooting

**"Email already registered" error:**
- The database has a unique constraint on email
- This prevents duplicate signups automatically

**"Invalid email format" error:**
- Email must be valid format (user@domain.com)

**"Invalid role selection" error:**
- Role must be one of the predefined options

**Database connection errors:**
- Check your Supabase URL and Service Role Key
- Ensure your project is active (not paused)
- Verify the table exists in your database

## 💡 Pro Tips

1. **Test locally first** with `.env.local`
2. **Use Supabase's real-time features** for live updates
3. **Set up database backups** in project settings
4. **Monitor usage** in the dashboard
5. **Use SQL Editor** for custom analytics

## 📈 Scaling Up

### **Supabase Free Tier:**
- 50,000 records
- 500MB database storage
- 50,000 monthly active users
- 2GB bandwidth

### **Upgrade Options:**
- **Pro Plan**: $25/month for higher limits
- **Team Plan**: $125/month for team collaboration
- **Enterprise**: Custom pricing

## 🔒 Security Features

- **Row Level Security** enabled
- **API keys** with different permission levels
- **SSL encryption** for all connections
- **IP restrictions** available
- **Audit logs** for compliance

## 📊 Advanced Analytics

```sql
-- Signups by day
SELECT DATE(created_at) as date, COUNT(*) as signups
FROM waitlist
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Most popular roles
SELECT role, COUNT(*) as count
FROM waitlist
GROUP BY role
ORDER BY count DESC;

-- Geographic analysis (if you add location data)
SELECT ip_address, COUNT(*) as count
FROM waitlist
GROUP BY ip_address
ORDER BY count DESC;
```
