# Pixel Perfect React Starter

> Use this starter template as a starting point for your submissions to the **Pixel Perfect hackathon.**

## The Project Setup

---

To get started with this project, follow these steps:

1. On GitHub, navigate to the main page of the repository.
2. Above the list of files, click **Use this template**.
3. Use the Owner drop-down menu, and select the account you want to own the repository.
4. Type a name for your repository, and an optional description.
5. Choose to make the repository either public or private.
6. Click **Create repository from template**.

To clone the repository using the command line, follow these steps:

1. Clone the newly created repository to your local machine by clicking the **Code** button and copying the URL.
1. Open a terminal and run the following command:

   ```
   git clone <url>
   ```

1. Change into the directory of the cloned repository.

   ```
   cd <repo-name>
   ```

1. Install the dependencies.

   ```
   yarn
   ```

1. Start the development server.

   ```
   yarn dev
   ```

1. Open the browser and navigate to `http://localhost:5173` to view the application.

## The Environment Variables

---

To run this project you need to create a new `.env` file and copy the contents of `.env.example` into it. Then, replace the values with your own values. The `.env` file is used to store environment variables that your application needs to function properly. The `.env` file is ignored by Git, so you don't have to worry about committing your secret credentials.

## The Project Structure

---

The project structure is as follows:

- `public`: Contains the static assets like images.
- `src`: Contains the source code for the application.
- `src/App.jsx`: The main React component.
- `src/main.jsx`: The entry point for the application.
- `src/styles`: Contains the CSS files used in the application.
- `src/styles/index.css`: The main CSS file.
- `src/components`: Contains the React components used in the application.
- `src/utils`: Contains utility functions used in the application.
