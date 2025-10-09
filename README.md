# 🚀 Portfolio Guided - Modern Developer Portfolio & Blog Platform

A full-stack portfolio and technical blog platform built with Next.js 14, featuring a containerized architecture with PostgreSQL database and Nginx reverse proxy. Perfect for developers who want to showcase their work and share technical articles.

## 📸 Portfolio Preview

| Home Page | Projects Section | Blog Section |
|-----------|------------------|--------------|
| ![Portfolio Home Page](pictures/portfolio-pic-1.png) | ![Portfolio Projects Section](pictures/portfolio-pic-2.png) | ![Portfolio Blog Section](pictures/portfolio-pic-3.png) |

![Portfolio Platform](https://img.shields.io/badge/Platform-Portfolio-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)

## ✨ Features

### 🏠 Portfolio Showcase

- **Hero Section** - Eye-catching landing with personal branding
- **Experience Timeline** - Professional experience and career journey
- **Projects Gallery** - Showcase of development projects with live demos
- **Testimonials** - Client and colleague recommendations
- **About Section** - Personal story and technical expertise
- **Contact Form** - Direct communication with database storage

### 📝 Technical Blog Platform

- **Article Management** - Full CRUD operations for technical articles
- **Category-based Organization** - Structured content categorization
- **MDX Support** - Rich markdown content with React components
- **Syntax Highlighting** - Code blocks with Prism.js integration
- **View Tracking** - Article engagement analytics
- **RSS Feed** - Automated content syndication
- **SEO Optimization** - Meta tags, sitemap, and structured data

### 🔧 Developer Features

- **Newsletter Subscription** - Email list management
- **Contact Messages** - Inquiry management system
- **Analytics Dashboard** - Content performance tracking
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Professional dark mode interface

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion animations
- **Database**: PostgreSQL 16 with Prisma ORM
- **Content**: MDX with rehype/remark plugins
- **Infrastructure**: Docker, Nginx reverse proxy
- **Security**: Cloudflare IP allowlist, environment-based configuration

### Container Architecture

``` txt
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx Proxy   │────│  Next.js App    │────│  PostgreSQL DB  │
│   Port: 80      │    │  Port: 5555     │    │  Port: 5432     │
│   SSL/Security  │    │  SSR/API Routes │    │  Prisma Schema  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- Git

### Production Deployment

```bash
# Clone the repository
git clone https://github.com/dirghayu101/portfolio-guided.git
cd portfolio-guided

# Create environment file
cp next-app/.env.example next-app/.env.local

# Configure database environment
# Edit: /usr/local/sbin/portfolio_env/db.env

# Deploy with Docker Compose
docker-compose up -d
```

Your portfolio will be available at `http://localhost`

### Local Development

```bash
# Navigate to Next.js app
cd next-app

# Install dependencies
npm install

# Set up database (requires running PostgreSQL)
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Development server: `http://localhost:3000`

## 📁 Project Structure

``` txt
portfolio-guided/
├── next-app/                   # Next.js application
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   │   ├── articles/      # Blog functionality
│   │   │   ├── api/           # API routes
│   │   │   └── page.tsx       # Homepage
│   │   ├── components/        # React components
│   │   │   ├── home/          # Portfolio sections
│   │   │   └── ui/            # Reusable UI components
│   │   ├── lib/               # Utilities and configurations
│   │   └── static/            # Static data and content
│   ├── prisma/                # Database schema and migrations
│   └── public/                # Static assets
├── deploy-config/             # Deployment configurations
│   ├── db/                    # PostgreSQL Docker setup
│   │   ├── Dockerfile
│   │   └── initdb/            # Database initialization scripts
│   └── nginx/                 # Nginx reverse proxy
│       ├── Dockerfile
│       └── conf/              # Nginx configurations
├── db/                        # Database documentation
└── docker-compose.yml         # Multi-container orchestration
```

## ⚙️ Configuration

### Environment Variables

Create `next-app/.env.local`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"

# Optional: Analytics, Email, etc.
```

### Database Setup

The PostgreSQL container automatically creates:

- **Schema**: `portfolio` - Isolated schema for this application
- **User**: `prisma_user` - Limited privileges for application access
- **Admin**: Custom admin user for schema management

### Nginx Configuration

- **Cloudflare Integration**: Automatic IP allowlist updates
- **Security Headers**: CORS, CSP, and security best practices
- **SSL Ready**: Configure with your certificates
- **Rate Limiting**: Built-in request throttling

## 📊 Database Schema

```sql
-- Articles with view tracking
Articles {
  id         Int      @id @default(autoincrement())
  slug       String   @unique
  title      String
  category   String
  view_count Int      @default(1)
  updatedAt  DateTime @default(now())
}

-- Newsletter subscribers
Subscriber {
  id            Int     @id @default(autoincrement())
  email         String  @unique
  is_subscribed Boolean @default(true)
}

-- Contact form submissions
ContactMessage {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

## 🎨 Customization

### Portfolio Content

1. **Personal Information**: Edit `src/static/home/0-siteConfig.ts`
2. **Experience Data**: Update `src/static/home/` data files
3. **Projects**: Modify project showcase data
4. **Styling**: Customize Tailwind configuration

### Blog Content

1. **Articles**: Create MDX files in your content management system
2. **Categories**: Add new categories via the API
3. **Themes**: Customize syntax highlighting themes

### Branding

- **Logo/Favicon**: Replace files in `public/`
- **Colors**: Update Tailwind color scheme
- **Typography**: Modify font configurations in `layout.tsx`

## 🚀 Deployment Options

### Docker Compose (Recommended)

- **Production Ready**: Multi-container orchestration
- **Scalable**: Easy horizontal scaling
- **Secure**: Isolated network and environment

### Vercel/Netlify

- **Frontend Only**: Deploy Next.js app separately
- **External Database**: Use managed PostgreSQL service
- **CDN Benefits**: Global content delivery

### VPS/Cloud Servers

- **Full Control**: Complete infrastructure management
- **Cost Effective**: Lower long-term costs
- **Custom Domains**: Easy SSL and domain configuration

## 🛠️ Development Commands

```bash
# Database management
npm run db:generate     # Generate Prisma client
npm run db:push        # Push schema changes
npm run db:studio      # Open Prisma Studio

# Development
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Run ESLint

# Docker operations
docker-compose up -d           # Start all services
docker-compose logs -f         # View logs
docker-compose down            # Stop all services
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Dirghayu Joshi** - [LinkedIn](https://www.linkedin.com/in/dirghayu-joshi-b46648204/) - [GitHub](https://github.com/dirghayu101)

**Project Link**: [https://github.com/dirghayu101/portfolio-guided](https://github.com/dirghayu101/portfolio-guided)

**Live Demo**: [https://joshi.codes](https://joshi.codes)

---

⭐ **Star this repository if it helped you build your portfolio!**
