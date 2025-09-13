# User Dashboard - React.js Application

A modern, responsive user dashboard built with React.js and Vite that allows you to browse, search, and manage users with a beautiful interface.

![User Dashboard](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.0.0-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.2.0-cyan)

## ✨ Features

- **User Management**: View, search, and create users
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Search Functionality**: Filter users by name in real-time
- **User Details**: View comprehensive user information including address and company details
- **Context API**: Global state management using React Context

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd user-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UserCard.jsx    # User card component
│   ├── UserForm.jsx    # Create user form
│   └── SearchBar.jsx   # Search functionality
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard page
│   └── UserDetails.jsx # User details page
├── context/            # React Context for state management
│   └── UserContext.jsx # User state management
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 🎨 Design Features

- **Gradient Color Scheme**: Indigo to purple gradient theme
- **Smooth Animations**: Hover effects and transitions
- **Card-based Layout**: Modern card design for user information
- **Responsive Grid**: Adapts to all screen sizes
- **Interactive Elements**: Buttons and forms with visual feedback

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px and above)
- **Tablet** (768px to 1023px)
- **Mobile** (below 768px)

## 🔧 API Integration

The app fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a fake online REST API for testing and prototyping.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

To run the test suite:

```bash
npm run test
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run test suite

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing fake API data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the development team.

---

**Enjoy using the User Dashboard!** 🎉