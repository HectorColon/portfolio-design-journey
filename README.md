# Héctor Colón Morales - Personal Portfolio

This repository contains the source code for my personal portfolio website. It is designed to showcase my skills, professional experience, and provide a way to get in touch. The site is built with modern web technologies and features a clean, responsive design.

## ✨ Features

-   **About Me**: An introduction with animated statistics highlighting years of experience, certifications, and programming language skills.
-   **Skills & Certifications**: A detailed breakdown of my technical skills across different categories like Frameworks, Languages, Cloud, and DevOps, along with my AWS certifications.
-   **Experience**: An interactive timeline detailing my professional journey, including roles, responsibilities, and key accomplishments.
-   **Contact**: A section with my contact information and links to my professional profiles on LinkedIn and Slack.
-   **Responsive Design**: A mobile-first design that ensures a great user experience on all devices.

## 🛠️ Tech Stack

This project is built with a modern, efficient technology stack:

-   **Frontend**: [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hectorcolon/portfolio-design-journey.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd portfolio-design-journey
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:8080`.

## 📦 Build and Deployment

The portfolio is deployed to Firebase Hosting.

-   To create a production build, run:
    ```sh
    npm run build
    ```
    This command compiles the TypeScript and React code and outputs the static files to the `dist/` directory.

-   To deploy the build to Firebase, use the following command (requires Firebase CLI and authentication):
    ```sh
    npm run deploy
