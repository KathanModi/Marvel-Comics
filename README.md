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
10 TEST CASES:
Display Products

Description: Ensure that all products are displayed correctly on the products page.
Steps:
Navigate to the products page.
Verify that the products list is populated with the correct details (name, price, image).
View Product Details

Description: Ensure that clicking on a product opens the product details page.
Steps:
Click on a product from the products list.
Verify that the product details are displayed, including name, description, price, and image.
Add Product to Cart

Description: Ensure that users can add products to the cart.
Steps:
Open the product details page.
Click on "Add to Cart."
Verify that the cart is updated with the product and the correct quantity.
View Cart

Description: Ensure that the cart page displays the correct products, quantities, and prices.
Steps:
Navigate to the cart page.
Verify that the products in the cart are displayed with correct details.
Edit Cart Quantity

Description: Ensure that users can update the quantity of products in the cart.
Steps:
Go to the cart page.
Modify the quantity of a product.
Verify that the cart total updates accordingly.
Remove Product from Cart

Description: Ensure that users can remove products from the cart.
Steps:
Go to the cart page.
Click the "Remove" button next to a product.
Verify that the product is removed and the total updates.
Proceed to Checkout

Description: Ensure that users can proceed to the checkout process.
Steps:
From the cart page, click "Checkout."
Verify that the checkout page loads with the correct order summary.
Fill Checkout Form

Description: Ensure that the checkout form can be filled out completely.
Steps:
Fill out all required fields (shipping address, payment method).
Verify that there are no validation errors.
Place Order

Description: Ensure that an order can be successfully placed.
Steps:
Click "Place Order" on the checkout page.
Verify that the order is submitted and a confirmation page is shown.
View Order History

Description: Ensure that users can view their order history.
Steps:
Navigate to the order history page.
Verify that past orders are listed with correct details (products, prices, status).


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
