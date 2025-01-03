# Sterlingo - Split Bill Application

Sterlingo is a Full-Stack web application (MERN Stack) that helps users manage and split expenses among a group of people, track transactions, and analyze spending patterns. The app is built with React for the frontend and Node+MongoDB for the backend.

## Project Structure

```plaintext
STERLINGO-APPLICATION
├── client/
│   ├── build/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── layouts/
│       ├── services/
│       ├── theme/
│       ├── utils/
│       ├── App.js
│       ├── config.json
│       ├── index.js
│       └── routes.js
├── components/
├── helper/
├── logs/
├── model/
├── node_modules/
├── routes/
├── .env
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## Technologies Used

### Frontend
- **React JS**: A JavaScript library for building user interfaces.
- **Redux**: For managing and centralizing the application state.
- **Axios**: To make API requests to the backend.
- **Material UI**: A React component library for designing a responsive and modern user interface.
- **Chart.js**: A JavaScript library to create interactive charts.
- **React-chartjs-2**: A React wrapper for Chart.js to display analytics.

### Backend
- **Express**: A web application framework for Node.js.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used for database operations.
- **bcryptjs**: For password hashing and data encryption, enhancing security.

## Installation

### Clone the repository:
```bash
git clone https://github.com/yourusername/sterlingo-application.git
```

## Install dependencies for both frontend and backend
### Navigate to client folder and install dependencies
```bash
cd sterlingo-application/client
npm install
```

### Navigate to the root folder and install dependencies
```bash
cd ..
npm install
```

## Environment Variables
Create a .env file in the root directory and add your environment variables as needed. Example:
```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
DASHBOARD_URL=http://localhost:3000/dashboard
```

## Start the application
```bash
cd client
npm start

cd ..
npm start
```

### Access the Application: Open your browser and navigate to http://localhost:3000

## Test user
johndoe1999@gmail.com
JohnDoe123!
