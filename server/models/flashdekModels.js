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