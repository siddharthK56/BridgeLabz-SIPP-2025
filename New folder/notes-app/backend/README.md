# Notes App Backend

This is the backend part of the Notes App project. It is built using Node.js and Express, and it connects to a MongoDB database using Mongoose.

## Features

- **CRUD Operations**: The backend supports Create, Read, Update, and Delete operations for notes.
- **RESTful API**: The API follows REST principles, allowing for easy integration with the frontend.
- **Database Connection**: The application connects to a MongoDB database to store notes.

## Project Structure

```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the logic for handling requests
│   │   └── notesController.js # Controller for notes
│   ├── models                # Contains Mongoose models
│   │   └── noteModel.js      # Model for notes
│   ├── routes                # Contains route definitions
│   │   └── notesRoutes.js    # Routes for notes API
│   └── config                # Configuration files
│       └── db.js            # Database connection setup
├── package.json              # NPM package configuration
└── README.md                 # Documentation for the backend
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the backend directory**:
   ```
   cd notes-app/backend
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Set up the database**:
   Ensure you have MongoDB installed and running. Update the database connection string in `src/config/db.js`.

5. **Run the application**:
   ```
   npm start
   ```

The server will start on the specified port, and you can access the API endpoints for notes.

## API Endpoints

- `POST /api/notes` - Create a new note
- `GET /api/notes` - Retrieve all notes
- `GET /api/notes/:id` - Retrieve a note by ID
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

## License

This project is licensed under the MIT License.