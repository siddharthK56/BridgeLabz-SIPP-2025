# Notes App Frontend

This is the frontend part of the Notes App, built using React. The application allows users to create, view, update, and delete notes. Below is an overview of the project structure and how to get started.

## Project Structure

```
frontend
├── public
│   └── index.html          # Main HTML file for the React app
├── src
│   ├── App.js              # Main component that sets up routing
│   ├── components
│   │   ├── Note.js         # Component for displaying individual note details
│   │   └── NoteList.js     # Component for fetching and displaying a list of notes
│   ├── pages
│   │   ├── HomePage.js     # Landing page of the application
│   │   └── NotePage.js     # Page for displaying details of a single note
│   └── styles
│       └── app.css         # CSS styles for the frontend application
└── package.json             # npm configuration file for the frontend
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd notes-app/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your browser and go to `http://localhost:3000` to view the app.

## Features

- Create new notes
- View a list of all notes
- View details of a single note
- Update existing notes
- Delete notes

## Technologies Used

- React
- React Router
- CSS

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.