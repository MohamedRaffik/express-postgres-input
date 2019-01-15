const express = require('express');
const app = express();
const api = require('./routes/api');

app.use(express.json());
app.use('/api', api);

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/scripts/script.js');
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});