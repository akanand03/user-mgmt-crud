# Mern Stack User Management System (CRUD App) 🚀
<hr>

## Description

Welcome to the User Management System! This dynamic web application is designed to facilitate efficient management of user profiles, skills, addresses, and hobbies. Crafted with React for the frontend and Node.js with Express for the backend, this application offers a seamless user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Relationships](#database-relationships)
- [Contributing](#contributing)
- [License](#license)

## Installation

Get started with these simple steps:

1. **Clone the repository:** `https://github.com/akanand03/user-mgmt-crud.git`
2. **Navigate to the project directory:** `cd crud-application-using-mern-stack`
3. **Install dependencies:**
   - For the client:
     ```bash
     cd client
     npm install
     ```
   - For the server:
     ```bash
     cd server
     npm install
     ```
4. **Start the client and server:**
   - For the client:
     ```bash
     npm start
     ```
   - For the server:
     ```bash
     npm start
     ```
5. **Configure your MongoDB connection:**
   - Create a `.env` file in the server directory.
   - Add your MongoDB connection string in the `.env` file as `MONGODB_URI`.

## Usage

Once installed, navigate to `http://localhost:8000` in your browser to access the application.

## Features

Experience the following functionalities:

- User profile management: Add, update, and delete user profiles.
- Skill management: Add, update, and delete skills for users.
- Address management: Add, update, and delete addresses for users.
- Hobby management: Add, update, and delete hobbies for users.
- Phone number management: Add, update, and delete phone numbers for users.

## Database Relationships

Explore the database relationships:

### One-to-One

- Each user has a one-to-one relationship with their profile details.
- Implemented by embedding the detail document within the user document.

### One-to-Many

- Users have multiple phone numbers associated with them.
- Achieved by embedding an array of phone number documents within the user document.

### Many-to-Many

- Users can have multiple hobbies and skills, and each hobby/skill can be associated with multiple users.
- Managed using arrays of references in MongoDB to capture this many-to-many relationship.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
