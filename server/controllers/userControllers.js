const models = require('../models/flashdekModels');

const userControllers = {};

userControllers.getUser = (req, res, next) => {
  models.User.find({username: req.body.username})
    .then((data) => {
      console.log('data', data);
      res.locals.data = data;
      return next();
      })
    .catch((err) => (next(err)));
}

userControllers.addUser = (req, res, next) => {
    const { name, username, email, password } = req.body;
    const newUser = {
        "name": name,
        "username": username,
        "email": email,
        "password": password
    }
    console.log('newUser in userControllers.js: ', newUser);
  models.User.create(newUser)
  .then((data) => {
    res.locals.data = data;
    return next();
  })
  .catch((error) => {
    return next(error);
  })
}






module.exports = userControllers;

// const userSchema = new Schema({
//   name: String,
//   username: String,
//   email: String,
//   password: String
// });