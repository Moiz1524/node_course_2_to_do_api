// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

var user = {name: 'Moiz', age: 22};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err,client) => {
if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


const db = client.db('TodoApp')

// db.collection('Users').insertOne({
//   name: 'Moiz',
//   age: 22,
//   location: 'Lahore'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert to do');
//   }
//   console.log(result.ops[0]._id.getTimestamp())
// });
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: 'false'
  // }, (err, result) => {
  //   if(err) return console.log('Unable to insert to do', err);
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

    client.close();
});
