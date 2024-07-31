const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kathanglsbca20:ironman@cluster0.58vaiol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db('test'); // Replace with your database name
    const collection = database.collection('products'); // Ensure the collection name is 'products'

    const products = [
        {
            name: 'Avengers Secret Wars',
            category: 'Comics',
            price: 9.99,
            description: 'Avengers Faces Their Biggest Threat DR DOOM!.',
            imageUrl: '/images/Secretwars.jpg' // Updated path
          },
          {
            name: 'Iron Man Action Figure',
            category: 'Action Figures',
            price: 19.99,
            description: 'A detailed Iron Man action figure.',
            imageUrl: '/images/ironman.jpg' // Updated path
          },
          {
            name: 'Captain America Shield',
            category: 'Accessories',
            price: 49.99,
            description: 'A replica of Captain America\'s shield.',
            imageUrl: '/images/captain_america.jpg' // Updated path
          },
          {
            name: 'Thor Hammer',
            category: 'Accessories',
            price: 39.99,
            description: 'A replica of Thor\'s hammer, Mjolnir.',
            imageUrl: '/images/thor.jpg' // Updated path
          },
          {
            name: 'Hulk Buster',
            category: 'Collectibles',
            price: 59.99,
            description: 'A detailed buster to defeat Hulk.',
            imageUrl: '/images/Hulk.jpg' // Updated path
          }
    ];

    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
