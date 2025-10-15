# Tidjani Frontend - Personal Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 15**, **React 18**, and **TypeScript**. This project showcases a clean and professional design with smooth animations, interactive components, and a comprehensive backend integration system.

## 🚀 Features

- **Modern Next.js 15 Architecture** with App Router
- **Responsive Design** optimized for all devices
- **Dark Theme** with professional color scheme
- **Interactive UI Components** with smooth animations
- **Dynamic Content Management** through Django backend API
- **Testimonials Carousel** with React Slick
- **Contact Form** with email functionality
- **Portfolio Showcase** with category filtering
- **Skills & Experience** sections with progress indicators
- **Services Showcase** with dynamic categories
- **Professional Sidebar** navigation
- **Mobile-First** responsive design
- **Advanced Logging** system with Pino
- **State Management** with React Query (TanStack Query)

## 🛠️ Technologies Used

### Frontend Framework

- **Next.js 15.4.6** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Styled Components 6.1.14** - CSS-in-JS styling
- **React Icons 5.4.0** - Icon library

### Carousels & Animations

- **React Slick 0.30.3** - Carousel component
- **React Multi Carousel 2.8.6** - Multi-item carousel
- **React Simple Typewriter 5.0.1** - Typing animations
- **React Modal 3.16.3** - Modal dialogs

### Data Management

- **React Query (TanStack Query) 5.85.3** - Server state management
- **Axios 1.9.0** - HTTP client for API calls

### Development Tools

- **ESLint 9.17.0** - Code linting
- **Pino 9.9.0** - High-performance logging
- **PostCSS 8.5.6** - CSS processing

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Taedj/frontend
```

2. **Navigate to the project directory:**

```bash
cd frontend
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

5. **Start the development server:**

```bash
npm run dev
```

6. **Build for production:**

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
frontend/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page component
├── components/                   # React components
│   ├── About/                   # About section components
│   ├── BackgroundText/          # Background text effects
│   ├── Button/                  # Reusable button components
│   ├── Chevron/                 # Chevron navigation icons
│   ├── Contact/                 # Contact form and section
│   ├── Footer/                  # Footer component
│   ├── Home/                    # Hero/home section
│   ├── Navbar/                  # Mobile navigation
│   ├── Portfolio/               # Portfolio showcase
│   ├── Services/                # Services section
│   ├── SideBar/                 # Desktop sidebar navigation
│   ├── Summary/                 # Skills and experience
│   └── Testimonial/             # Testimonials carousel
├── config/                      # Configuration files
│   ├── custom-environment-variables.json
│   ├── default.json
│   ├── development.json
│   └── production.json
├── constants/                    # Application constants
│   └── constants.ts             # Colors, dimensions, sections
├── context/                     # React context providers
├── hooks/                       # Custom React hooks
│   ├── useCategories.ts         # Categories management
│   ├── useConfig.ts             # Configuration hooks
│   ├── useEducations.ts         # Education data hooks
│   ├── useExperiences.ts        # Experience data hooks
│   ├── useIsMobile.ts           # Responsive breakpoint hooks
│   ├── useJobModelSliderWidth.ts # Portfolio slider hooks
│   ├── useServices.ts           # Services data hooks
│   ├── useSkills.ts             # Skills data hooks
│   └── useWorks.ts              # Portfolio works hooks
├── http/                        # API client and services
│   ├── apiClient.ts             # Axios client configuration
│   ├── CategoriesService.tsx    # Categories API service
│   ├── ConfigService.ts         # Configuration API service
│   ├── EducationsService.ts     # Education API service
│   ├── ExperiencesService.ts    # Experience API service
│   ├── ServicesService.ts       # Services API service
│   ├── SkillsService.ts         # Skills API service
│   └── WorksService.ts          # Portfolio works API service
├── lib/                         # Utility libraries
│   ├── clientLogger.ts          # Client-side logging
│   └── logger.ts                # Server-side logging
├── public/                      # Static assets
│   ├── assets/                  # Images and media
│   └── resume.pdf               # Resume document
└── styles/                      # Additional stylesheets
```

## 🔧 Configuration

### Environment Setup

The project uses configuration files in the `config/` directory for different environments:

- `development.json` - Development environment settings
- `production.json` - Production environment settings
- `custom-environment-variables.json` - Environment variable mappings

### API Configuration

The backend API is configured in `constants/constants.ts` and connects to a Django backend at `http://127.0.0.1:8000`.

### Customization

You can customize:

- **Colors and Theme**: Modify `constants/constants.ts`
- **Content**: Update component files in `components/`
- **Styling**: Modify `app/globals.css` and component-specific CSS files

## 📱 Responsive Design

The website is fully responsive with breakpoints defined in `constants/constants.ts`:

- **Mobile**: < 768px
- **Tablet**: 768px - 1200px
- **Desktop**: > 1200px

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The project can be deployed to:

- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🔌 Backend Integration

This frontend connects to a **Django backend** providing:

- **Dynamic content management**
- **Portfolio categories and works**
- **Services and skills data**
- **Education and experience information**
- **Contact form processing**

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint** configuration for code quality
- **TypeScript** for type safety
- **Prettier** for code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Bensouici Akram**

- **GitHub**: [@bensouiciakram](https://github.com/bensouiciakram)
- **LinkedIn**: [Bensouici Akram](https://linkedin.com/in/bensouiciakram)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **React Query** for efficient server state management
- **Pino** for high-performance logging
- **React Icons** for the comprehensive icon library
.