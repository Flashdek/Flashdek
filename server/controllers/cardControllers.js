const models = require('../models/flashdekModels');

const cardControllers = {};

cardControllers.getCards = (req, res, next) => {
  //query the mongoDB to grab all of the cards
  models.Flashcard.find({})
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch((error) => {
      return next(error);
    })
    
  //store the cards on res.locals object
  //invoke next()
}
// this doesn't work yet for some reason.  issue with the insert method for mongoDB.
cardControllers.submitCard = (req, res, next) => {
  console.log('we are in submitcard middleware', req.body);
  const { keyword, question, answer } = req.body;
  // console.log('keyword, question, and answer', keyword, question, answer)
  //query the mongoDB to add a new card from the request body
  models.Flashcard.create({
    "keyword" : keyword,
    "question" : question,
    "answer" : answer
  })
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch((error) => {
      return next(error);
    })
}

module.exports = cardControllers;