# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Quiz App

Welcome to the Quiz App! This is a React-based application built with Vite, designed to provide an interactive quiz experience.

## Features

- Interactive quiz interface
- Dynamic question rendering
- Real-time score tracking
- Responsive design

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the app.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Previewing the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

## Project Structure

```
Quiz-app/
├── public/         # Static assets
├── src/            # Source files
│   ├── assets/     # Images and other assets
│   ├── Components/ # React components
│   ├── App.jsx     # Main app component
│   └── main.jsx    # Entry point
├── index.html      # HTML template
├── package.json    # Project metadata and scripts
└── vite.config.js  # Vite configuration
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
