# MyPiggyBank app

A simple banking app that allows users to manage their expenses. Built with modern tools and technologies, this app helps users track their finances, and all data is stored locally in the browser's local storage.

## Project Objective

The goal of this project is to:

- Use Git and GitHub for version control.

- Learn Docker to containerize a React (frontend) application.

- Set up a complete project workflow: development, versioning, and containerization.

## Technologies Used

- **Vite** - A fast build tool for modern web development.
- **React** - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for creating custom designs without leaving your HTML.
- **TypeScript** - A statically typed superset of JavaScript for better development and debugging.
- **Mantine** - A component library for UI elements.
- **React Router DOM** - A routing library for React to handle navigation and URLs.
- **Docker** - Containerized environment for easy deployment.
- **Vitest** - A blazing-fast unit testing framework for Vite projects.

## Features

- **Expense Management**: Track and manage your expenses.
- **Local Storage**: Stores your expense data in the browser's local storage.
- **Responsive UI**: Built with Tailwind CSS for a clean, responsive design.
- **Routing**: Navigate between different views using React Router DOM.

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/bastienpog/Project-MyBank.git
cd Project-Mybank
```

### 2. Install dependencies with PNPM

```sh
npm install
```

### 3. Start the development server

```sh
npm run dev
```

## Docker

To run the app using Docker, follow these steps:

### 1. Build the docker image

```sh
docker build . -t banking-app
```

### 2. Run the docker container

```
docker run -p 3000:3000 image-name
```

Visit `http://localhost:3000` to view the app.

## Contributing

Feel free to fork the repository, open issues, and submit pull requests. Contributions are welcome!
