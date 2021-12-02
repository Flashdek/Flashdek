const models = require('../models/flashdekModels');

const tokenController = {};

tokenController.getToken = (req, res, next) => {
  const { code } = req.params;
}

module.exports = tokenController;