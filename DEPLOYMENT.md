# Deployment Guide

This document outlines the deployment process for the Jim Hillier Portfolio website.

## 🌐 Current Deployment

The portfolio is currently deployed at:
- **Primary Domain**: [jimhillier.co.uk](https://jimhillier.co.uk)
- **Replit Domain**: Available through Replit deployments

## 🚀 Replit Deployment

The application is designed for seamless deployment on Replit:

### Automatic Deployment
1. Connect your GitHub repository to Replit
2. Replit automatically detects the Node.js project
3. Uses the configured workflow: `npm run dev`
4. Serves on port 5000 with automatic SSL

### Manual Deployment Steps
1. Import project to Replit from GitHub
2. Set environment variables in Replit Secrets:
   - `DATABASE_URL`: PostgreSQL connection string
3. Run the application using the "Start application" workflow
4. Access via the generated `.replit.app` domain

## 🗄️ Database Setup

### Neon PostgreSQL (Recommended)
1. Create account at [neon.tech](https://neon.tech)
2. Create new project and database
3. Copy connection string to `DATABASE_URL` environment variable
4. Database tables are created automatically via Drizzle migrations

### Local PostgreSQL
```bash
# Install PostgreSQL locally
# Create database
createdb portfolio_db

# Set environment variable
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
```

## 🔧 Environment Variables

Required environment variables:

```bash
# Database
DATABASE_URL=postgresql://...

# Node Environment (automatically set by Replit)
NODE_ENV=production

# Port (automatically set by Replit)
PORT=5000
```

## 📦 Build Process

### Production Build
```bash
npm run build
```

This creates:
- `dist/public/` - Frontend static files
- `dist/server/` - Backend server bundle

### Development Mode
```bash
npm run dev
```

Starts both frontend (Vite) and backend (Express) in development mode with hot reloading.

## 🌍 Custom Domain Setup

### Replit Deployments
1. Go to Replit Deployments dashboard
2. Select your project
3. Navigate to "Domains" tab
4. Add custom domain: `jimhillier.co.uk`
5. Configure DNS records as provided by Replit

### DNS Configuration
Add these records to your domain provider:
```
Type: CNAME
Name: www
Value: [provided by Replit]

Type: A
Name: @
Value: [provided by Replit]
```

## 🔒 SSL/Security

- **Automatic SSL**: Provided by Replit for custom domains
- **HTTPS Redirect**: Automatically handled
- **Security Headers**: Configured in Express middleware

## 📊 Performance Optimization

### Frontend
- **Vite bundling** for optimized assets
- **Tree shaking** to remove unused code
- **Code splitting** for faster load times
- **Image optimization** for attached assets

### Backend
- **Express compression** middleware
- **Efficient database queries** with Drizzle ORM
- **Connection pooling** for database performance

## 🔍 Monitoring

### Available Logs
- Application logs via Replit console
- Database query logs (development)
- Performance metrics in Replit dashboard

### Health Checks
The application includes basic health endpoints for monitoring deployment status.

## 🚀 Deployment Checklist

Before deploying:

- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] Production build successful
- [ ] All tests passing
- [ ] Custom domain DNS configured
- [ ] SSL certificate active

## 🆘 Troubleshooting

### Common Issues

**Database Connection Errors**
- Verify `DATABASE_URL` format
- Check database server accessibility
- Ensure connection limits not exceeded

**Build Failures**
- Check Node.js version compatibility
- Verify all dependencies installed
- Review build logs for specific errors

**Domain Issues**
- Verify DNS propagation (can take 24-48 hours)
- Check DNS record configuration
- Confirm domain ownership in Replit

### Support Resources
- Replit Documentation: [docs.replit.com](https://docs.replit.com)
- Neon Database Docs: [neon.tech/docs](https://neon.tech/docs)
- Contact: hillier.jim@gmail.com

---

*Last updated: August 2025*