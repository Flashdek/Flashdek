const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:admin@flashdek.g467u.mongodb.net/flashdek?retryWrites=true&w=majority';
console.log('RUNNING ');
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'flashdek'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));


  // const MONGO_URI = 'mongodb+srv://dbtoopham:codesmith@cluster0.fzjmt.mongodb.net/starwarsdb?retryWrites=true&w=majority';

  // mongoose.connect(MONGO_URI, {
  //   // options for the connect method to parse the URI
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   // sets the name of the DB that our collections are part of
  //   dbName: 'starwarsdb'
  // })
  // .then(() => console.log('Connected to Mongo DB.'))
  // .catch(err => console.log('ERROR CAUGHT: ',err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('user', userSchema);

const flashcardSchema = new Schema({
  keyword: Array,
  question: String,
  answer: String
});

const Flashcard = mongoose.model('flashcard', flashcardSchema);

module.exports = {
  User,
  Flashcard
};