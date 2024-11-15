# Project Overview 
This website is built using React.js and Tailwind CSS for the frontend, and Node.js and Express.js for the backend. The website includes dynamic content translation, allowing users to select their preferred language from a dropdown menu.

## Frontend 
### The frontend is developed using React.js for building the user interface and Tailwind CSS for styling.
### Key features include:

1. Navbar with Language Dropdown: The navbar contains a dropdown menu with options for four languages: English, Hindi, Marathi, and French. When a user selects a language, the entire content of the page is dynamically updated based on the selected language.

2. Context API for Language Management: A context file is created to manage the language state across the entire application. It fetches language data from the backend API and passes it to the Page and Navbar components for dynamic content translation.

3. Frontend Deployment: The frontend is deployed on Vercel for hosting.

### 4. Fallback for Language Fetching: In case of any issues fetching language data from the backend, fallback hardcoded data is used to ensure the page is still translated properly.

## Backend
1. The backend is built using Node.js and Express.js. It serves the content to the frontend:

2. API for Language Data: The backend API is responsible for serving the language data stored in a JSON file. The JSON data includes translations for various sections of the website, which is then sent to the frontend based on the selected language.

3. The Backend API is Pefectly running on the Postman.

4. Backend Deployment: The backend is deployed on Render.

### Technology:
Frontend: React.js, Tailwind CSS, Axios
Backend: Node.js, Express.js, JSON for Language Data
Deployment: Vercel (Frontend), Render (Backend)

### How it will work
1. Language Selection: Users can select from four languages (English, Hindi, Marathi, French) via a dropdown on the navbar.
2. Dynamic Translation: The website content automatically updates based on the selected language.
3. Error Handling: In case of issues fetching data from the backend, fallback translations are used.
