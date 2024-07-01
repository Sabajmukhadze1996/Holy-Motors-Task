# Holy-Motors-Task

## Project Overview

This project is a full-stack application built with React.js for the front end and Node.js for the back end. It aims to create a user-friendly and dynamic single-page web application.

## Technologies and Packages Used

- **Front End**: React.js, HTML/CSS, Bootstrap, @apollo/client, GraphQL
- **Back End**: Node.js, Express.js, MongoDB, GraphQL, express-graphql
- **Tools**: Git, npm

## How to Run Both Front-End and Back-End

### Back End

1. **Install Dependencies**:
    - Navigate to the Back-End directory.
    - Run `npm install --legacy-peer-deps` to avoid dependency version conflicts.
    
2. **Start the Server**:
    - Run `npm run devStart` to start the main `index.js` file.
    - The server will run on `localhost:4000`.

3. **Database Migrations**:
    - For migrating the `Projects` collection, use the CLI command `npm run migrate:projects`.
    - For migrating the `Works` collection, use the CLI command `npm run migrate:works`.
    - These commands are defined in the `scripts` section of `package.json`.

4. **Database Seeding**:
    - To seed the `OurProjects` collection, use the CLI command `npm run seed:projects`.
    - To seed the `OurWorks` collection, use the CLI command `npm run seed:works`.

5. **Database Testing**:
    - Use MongoDB Compass for testing the database locally. You can download it and test your collections and documents.


### Front End

1. **Install Dependencies**:
    - Navigate to the Front-End directory.
    - Run `npm install --legacy-peer-deps` to avoid dependency version conflicts.

2. **Start the Front End**:
    - Run `npm start` to start the development server.
    - The application will open in the browser at `localhost:3000` and automatically connect to the back-end server running on `localhost:4000`.

3. **Dynamic Data Handling**:
    - The `OurProjects` and `OurWorks` sections use dynamic data fetched using the @apollo/client library.
    - Data is updated dynamically based on user interactions such as pagination or scrolling, changing the title, description, text, and images according to the back-end data.

