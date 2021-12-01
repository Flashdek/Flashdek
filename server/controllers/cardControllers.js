const models = require('../models/flashdekModels');

const cardControllers = {};

cardControllers.getCards = (req, res, next) => {
  models.Flashcard.find({})
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch((error) => {
      return next(error);
    })
}

cardControllers.submitCard = (req, res, next) => {
  console.log('we are in submitcard middleware', req.body);
  const { keyword, question, answer } = req.body;

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

cardControllers.deleteCard = (req, res, next) => {
  const { id } = req.params;

  models.Flashcard.deleteOne({
    '_id': id
  })
  .then(() => {
    return next();
  })
  .catch((error) => {
    return next(error);
  })
}

cardControllers.updateCard = (req, res, next) => {
	const { id, keyword, question, answer } = req.body;

  models.Flashcard.findOneAndUpdate({ _id: id}, {
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