const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ProductRoute = require('./routes/products');
const UserRoute = require('./routes/users');
const OrderRoute = require('./routes/orders');
const CategoryRoute = require('./routes/categories');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', ProductRoute);
app.use('/api/users', UserRoute);
app.use('/api/orders', OrderRoute);
app.use('/api/categories',CategoryRoute);

// Connect to MongoDB
mongoose.connect('mongodb+srv://kathanglsbca20:123@cluster0.vbt5wca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
