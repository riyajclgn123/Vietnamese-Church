Vietnamese Church Website - React Project
Overview
A modern, responsive React website for a Vietnamese Church featuring authentication, user profiles, and multiple pages with consistent design. Built with React, React Router, and custom CSS.

Features
Responsive Design: Works on all device sizes

Pages:

Home (with photo carousel)

About (mission, history, leadership)

Graduates (student cards)

Contact (form and info)

Authentication:

Login/Sign Up functionality

User profile page

UI Components:

Navbar with logo, navigation, and user avatar

Matching footer

Card-based layouts

Modern color schemes

Technologies Used
React (with TypeScript)

React Router

React Responsive Carousel

Custom CSS (no frameworks)

In-memory authentication (for demo purposes)

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/vietnamese-church-website.git
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Project Structure
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Graduates.tsx
│   ├── Contact.tsx
│   ├── Login.tsx
│   ├── SignUp.tsx
│   └── User.tsx
├── assets/ (for images)
├── styles/ (for CSS files)
└── App.tsx (main application)
Default Login
For demo purposes, use:

Email: user@example.com

Password: 123456

Customization
Replace placeholder images in /public and /assets

Update content in the respective page components

Modify colors in CSS files to match your preferred theme

Future Improvements
Connect to a real backend/database

Implement persistent authentication

Add admin functionality

Expand graduate profiles

License
This project is open-source and available under the MIT License.

For full documentation, see the Project Documentation PDF included in the repository.

Note: This project was developed as a demonstration and may require additional security measures for production use.
