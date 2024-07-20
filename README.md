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

