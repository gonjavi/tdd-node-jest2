const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { postsposts require('./endpoints');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const postsHandlers = users({ axios }); // injecccion de dependencia

app.post('/', postsHandlers.post);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})