// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err,client) => {
const db = client.db('TodoApp');
if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

    // db.collection('Users').deleteMany({name: 'Moiz'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteOne({text: 'Go through'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({text: 'Go through'}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Todos').deleteMany({text: 'Go through'}).then((result) => {
      console.log(result);
    });

    db.collection('Todos').findOneAndDelete({
      _id: new ObjectID('5bffd8c9df0ec41600305348')
    }).then((result) => {
      console.log(result);
    });
// client.close();
});
