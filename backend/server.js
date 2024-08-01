const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ProductRoute = require('./routes/products');
const CategoryRoute = require('./routes/categories');

const app = express();
const PORT = 5000; // Hardcoded port number
const MONGO_URI = 'mongodb+srv://kathanglsbca20:ironman@cluster0.58vaiol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Hardcoded MongoDB URI

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/products', ProductRoute);
app.use('/categories', CategoryRoute);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
