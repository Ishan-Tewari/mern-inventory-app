const mongoose = require('mongoose');
require('dotenv').config();

async function fixDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern-inventory');
    console.log('Connected to MongoDB');

    // Get the users collection
    const db = mongoose.connection.db;
    const usersCollection = db.collection('users');

    // Drop the email index
    try {
      await usersCollection.dropIndex('email_1');
      console.log(' Email index dropped successfully');
    } catch (error) {
      console.log(' Email index already dropped or doesn\'t exist');
    }

    // Drop the email_1 index (alternative name)
    try {
      await usersCollection.dropIndex('email_1');
      console.log(' Email_1 index dropped successfully');
    } catch (error) {
      console.log(' Email_1 index already dropped or doesn\'t exist');
    }

    console.log('Database fixed! You can now register users.');
    process.exit(0);
  } catch (error) {
    console.error('Error fixing database:', error);
    process.exit(1);
  }
}

fixDatabase(); 