# Spring React Playground

This project is a simple CRUD (Create, Read, Update, Delete) application built using Spring Boot for the backend and React for the frontend. It allows you to manage a list of users with basic information such as name, username, and email.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Technologies Used

- **Backend:**
    - Spring Boot
    - Spring Data JPA
    - H2 Database (default for simplicity)

- **Frontend:**
    - React
    - react-router-dom
    - axios
    - Bootstrap

## Project Structure

- `backend`: Contains the Spring Boot backend code, including controllers, services, repository, and models.
- `frontend`: Contains the React frontend code, including components, pages, and the main `App.js`.
- `src/main/resources`: Contains the application properties and configurations for the Spring Boot application.

## Setup

1. **Backend:**
    - Open the `backend` directory in your preferred Java IDE (e.g., IntelliJ, Eclipse).
    - Run the `SpringReactApplication` class to start the Spring Boot application.

2. **Frontend:**
    - Open the `frontend` directory in your preferred code editor (e.g., Visual Studio Code, IntelliJ).
    - Open a terminal and run the following commands:
      ```bash
      npm install
      npm start
      ```
      This will start the React development server.

## Usage

- Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the React frontend.
- The Spring Boot backend is accessible at [http://localhost:8888](http://localhost:8888).

## API Endpoints

- **GET /api/v1/users:** Get all users.
- **GET /api/v1/users/{id}:** Get a user by ID.
- **POST /api/v1/users/save:** Create a new user.
- **PUT /api/v1/users/{id}:** Update an existing user by ID.
- **DELETE /api/v1/users/{id}:** Delete a user by ID.

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, feel free to open an issue or create a pull request.
