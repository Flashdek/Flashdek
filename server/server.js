const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 8080;
const api = require('./api')

app.use(cors());
app.options('*', cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// route all incoming requests to api.js
app.use('/api', api);

app.use('/', express.static(path.resolve(__dirname, '../public')));


app.use((req, res) => res.status(404).send('This is not the page you are looking for'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;