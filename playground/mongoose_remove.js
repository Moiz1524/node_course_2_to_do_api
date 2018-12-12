const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove();
Todo.findByIdAndRemove('5c10d7ff7042b3601e76d7cf').then((todo) => {
  console.log(todo);
});
