# Marvel-Comics

**Student Name**: Kathan Modi  
**Student Number**: 8959790  
**Date**: 17/07/2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

### Database Schema Design
**Users Schema(MongoDB)**
-`id`: ObjectId
-`username`: string
-`email`: string
-`password`: string
-`isAdmin`: boolean
-`createdAt`: "ISODate"

  Admins Schema
  -`id`: "ObjectId",
  -`userId`: "ObjectId",
  -`createdAt`: "ISODate"

Products Schema
-`id`: ObjectId
-`name`: string
-`description`: string
-`price`: number
-`stock`: number
-`categoryId`: ObjectId
 
-`createdAt`:ISODate

  Categories Schema
-`id`:ObjectId
-`name`:string
-`description`:string
  
  Orders Schema
  `id`:ObjectId
  `userId`: ObjectId
  `orderDate`:ISODate
  `totalAmount`:number
  `status`:string
  `items`:  -`productId`:ObjectID,-`quantity`:number,-`price`:number,-`paymentId`:ObjectId

  Payments Schema
-`id`:ObjectId
-`orderId`:ObjectId
-`paymentMethod`:string
-`paymentDate`:ISODate
-`amount`:number
-`status`:string

  Cart Schema
-`id`:ObjectId
-`userId`:ObjectId
-`items`: -`productId`: "ObjectId",-`quantity`: "number"
-`createdAt`:ISODate
-`updatedAt`:ISODate
How to Setup the Project to Successfully Run It:
Prerequisites
Before setting up the project, ensure you have the following installed on your system:

Node.js (version 14 or higher)
npm (Node Package Manager)
MongoDB (You can use MongoDB Atlas for cloud-based MongoDB)

1. Clone the Repository
First, clone the project repository to your local machine:

git clone <repository-url>
`cd Marvel-Comics-main`

2. Install Dependencies:
Backend Setup
Navigate to the backend directory:
`cd backend`

Install the necessary packages:
`npm install`

Frontend Setup
Navigate to the frontend directory:
`cd ../frontend`

Install the necessary packages:
`npm install`

3.Run the Application
Start the Backend Server
Navigate to the backend directory:
`cd backend`

Start the backend server:
`npm start`

Start the Frontend Server
Navigate to the frontend directory:
`cd ../frontend`

Start the frontend server:
`npm start`

Open your browser and visit http://localhost:3000 to interact with the frontend of the Marvel Comics application.
The backend server can be accessed at http://localhost:5000.

Youtube Video Link:-https://youtu.be/R1jCnLTZDmQ
