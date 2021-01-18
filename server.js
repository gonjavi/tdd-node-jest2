const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { posts } = require('./endpoints');
const { authenticate } = require('./middlewares');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const postsHandlers = posts({ axios }); // injecccion de dependencia

app.post('/', authenticate, postsHandlers.post);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})