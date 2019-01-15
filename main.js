const express = require('express');
const app = express();
const api = require('./router');

app.use(express.json());
app.use('/api', api);

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js');
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});