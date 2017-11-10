const {MongoClient} = require('mongodb');

// 1
const MONGO_URL = 'mongodb://localhost:27017/hackernews';

// 2
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL)
  .then(e=>console.log("connected to db"))
  .catch(e=>console.log("imposible to connect"))
  return {Links: db.collection('links')};
}