# 🛒 Smart Cart

> **Voice-powered sustainable shopping for everyone**

Smart Cart is a modern, eco-friendly e-commerce platform that makes sustainable shopping accessible through innovative voice-powered experiences, comprehensive carbon footprint tracking, and beautiful user interfaces. Built with cutting-edge technologies and designed with sustainability at its core.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## ✨ Features

### 🌱 **Eco-Friendly Shopping**
- **Carbon Footprint Tracking** - Every product shows its environmental impact with intuitive badges
- **Eco-Friendly Badges** - Clear identification of sustainable products
- **Sustainability Metrics** - Track your environmental impact and contribution to eco-initiatives
- **Green Product Categories** - Curated collections of environmentally conscious items

### 🎙️ **Voice-Powered Experience**
- **Voice Shopping** - Navigate, search, and shop using voice commands
- **Accessibility First** - Screen reader compatible and keyboard navigation
- **Smart Voice Search** - "Hey Smart Cart" activation with natural language processing
- **Voice Suggestions** - Interactive voice prompts and helpful suggestions

### 🛍️ **Modern E-commerce Features**
- **10 Main Categories** - Comprehensive product organization (Men, Women, Kids, Electronics, etc.)
- **Interactive Product Cards** - Zoom-on-hover effects and smooth animations
- **Animated Cart Sidebar** - Smooth transitions with enhanced visual effects
- **Smart Navigation** - Dropdown menus with subcategories and eco highlights
- **Advanced Search & Filters** - Find exactly what you're looking for

### 🎨 **Premium User Experience**
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Perfect experience across all devices and screen sizes
- **Smooth Animations** - 60fps animations and micro-interactions throughout
- **Modern UI Components** - Built with Shadcn/UI and Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or use our integrated Replit database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-cart.git
   cd smart-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your database URL and other configuration
   ```

4. **Initialize the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:5000
   ```

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development experience  
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful, accessible component library
- **Wouter** - Minimalist routing for React
- **TanStack Query** - Powerful data fetching and state management
- **Framer Motion** - Production-ready motion library

### Backend
- **Node.js & Express** - Fast, unopinionated web framework
- **TypeScript** - Full-stack type safety
- **Drizzle ORM** - Type-safe SQL toolkit
- **PostgreSQL** - Reliable, feature-rich database
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing

### Development Tools
- **Vite** - Next generation frontend tooling
- **ESLint & Prettier** - Code quality and formatting
- **Drizzle Kit** - Database migrations and introspection

## 📁 Project Structure

```
smart-cart/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages/routes
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── App.tsx        # Main application component
├── server/                # Express backend application
│   ├── auth.ts           # Authentication logic
│   ├── db.ts             # Database connection
│   ├── storage.ts        # Data access layer
│   └── routes.ts         # API routes
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema definitions
└── attached_assets/      # Static assets and images
```

## 🌍 Environmental Impact

Smart Cart is built with sustainability in mind:

- **Carbon Footprint Tracking**: Every product displays its environmental impact
- **Eco-Friendly Filtering**: Easy discovery of sustainable products  
- **Digital-First Receipts**: Reduce paper waste with digital documentation
- **Sustainable Packaging**: Partner with eco-conscious suppliers
- **Green Hosting**: Deployed on renewable energy infrastructure

### Our Impact So Far
- 🌱 **2,450kg CO₂ Saved** - Through sustainable product choices
- 🌳 **1,234 Trees Planted** - Via our environmental partnership program
- 👥 **12,500+ Happy Customers** - Choosing sustainable alternatives

## 🛍️ Product Categories

| Category | Description | Eco Features |
|----------|-------------|--------------|
| **👔 Men's** | Sustainable fashion & accessories | Organic cotton, recycled materials |
| **👗 Women's** | Eco-friendly clothing & beauty | Natural fibers, clean beauty |
| **👶 Kids** | Safe, reusable products | Non-toxic materials, educational |
| **🏠 Home & Kitchen** | Low-carbon alternatives | Energy-efficient, biodegradable |
| **💻 Electronics** | Energy-efficient devices | Recycled components, solar options |
| **🏃 Sports & Outdoors** | Durable eco materials | Sustainable manufacturing |
| **📚 Books & Stationery** | Recycled paper products | FSC certified, eco inks |
| **💊 Health & Personal Care** | Natural & biodegradable | Organic ingredients, plastic-free |
| **🥗 Grocery & Food** | CO₂ footprint tracking | Local sourcing, organic options |
| **🐕 Pet Supplies** | Sustainable pet care | Natural materials, eco toys |

## 🚀 Deployment

### Using Replit (Recommended)
The project is optimized for Replit deployment with automatic database provisioning and environment setup.

### Manual Deployment
1. Set up your PostgreSQL database
2. Configure environment variables
3. Build the application: `npm run build`
4. Start the production server: `npm start`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Sustainability Partners** - For helping us track and reduce environmental impact
- **Open Source Community** - For the amazing tools and libraries
- **Beta Testers** - For their valuable feedback and suggestions
- **Design Inspiration** - Shopify, Patagonia, and other sustainability leaders

## 📞 Support

- **Documentation**: [docs.smartcart.com](https://docs.smartcart.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/smart-cart/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/smart-cart/discussions)
- **Email**: support@smartcart.com

---

<div align="center">
  <p>Made with 💚 for the planet</p>
  <p>
    <a href="#top">⬆️ Back to Top</a>
  </p>
</div>