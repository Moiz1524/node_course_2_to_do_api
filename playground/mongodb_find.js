// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err,client) => {
const db = client.db('TodoApp');
if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
console.log('Connected to MongoDB server');

// db.collection('Todos').find().toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch the documents', err);
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch the documents', err);
// });

db.collection('Users').find({name: 'Moiz'}).toArray().then((docs) => {
  console.log('Users');
  console.log(docs);
}, (err) => {
  console.log('Unable to fetch the results');
});
    // client.close();
});
