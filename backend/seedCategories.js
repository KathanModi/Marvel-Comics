const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kathanglsbca20:ironman@cluster0.58vaiol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db('test'); // Replace with your database name
    const collection = database.collection('categories'); // Ensure the collection name is 'categories'

    const categories = [
      {
        name: 'Comics'
      },
      {
        name: 'Action Figures'
      },
      {
        name: 'Accessories'
      },
      {
        name: 'Collectibles'
      }
    ];

    const result = await collection.insertMany(categories);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
