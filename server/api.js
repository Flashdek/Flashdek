const express = require('express');

const cardControllers = require('./controllers/cardControllers');
const userControllers = require('./controllers/userControllers');

const router = express.Router();

router.get('/', cardControllers.getCards, (req, res) => res.status(200).json(res.locals.data));

router.get('/getUsers', userControllers.getUser, (req, res) => res.status(200).json(res.locals.data));

router.post('/submitCard', cardControllers.submitCard, (req, res) => {
  console.log('we made it to the 201 status');
  res.sendStatus(201);
})

router.post('/addUser', userControllers.addUser, (req, res) => res.status(200).json(res.locals.data));

// router.delete('/deleteCard', cardControllers.deleteCard, (req, res) => res.status(200).json(res.locals.data));


module.exports = router;