# Vietnamese Church Website

This is a React-based website for a Vietnamese church. The project includes several components and pages to provide information about the church, its graduates, and contact details.

## Project Structure

```
vietnamese-church-website
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components
│   │   ├── Navbar.tsx      # Navigation bar component
│   │   ├── Footer.tsx      # Footer component
│   │   └── Graduates.tsx   # Component displaying information about graduates
│   ├── pages
│   │   ├── Home.tsx        # Homepage component
│   │   ├── About.tsx       # About page component
│   │   ├── Graduates.tsx   # Graduates page component
│   │   └── Contact.tsx     # Contact page component
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles
│       ├── Navbar.css      # CSS styles for the Navbar component
│       ├── Footer.css      # CSS styles for the Footer component
│       └── App.css         # Global CSS styles for the application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd vietnamese-church-website
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- A responsive navigation bar with links to Home, About, Graduates, and Contact pages.
- A footer that mirrors the design of the navigation bar.
- Separate components for each page to maintain a clean and organized code structure.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.
