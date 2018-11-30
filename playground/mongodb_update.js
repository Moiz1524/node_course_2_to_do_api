// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err,client) => {
const db = client.db('TodoApp');
if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5bffdcd1aee6a01c40688900')
}, {
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
});

});
// client.close();
