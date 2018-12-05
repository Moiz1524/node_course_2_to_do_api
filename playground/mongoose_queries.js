const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');
var id = '5c04fe5d37ff391988a54fbc';

if (!ObjectID.isValid(id)) {
   console.log('ID not valid');
}

User.findById({
  _id: id
}).then((user) => {
  if(!user) {
    return console.log('ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
});

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid ');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));
