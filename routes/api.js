const router = require('express').Router();
const client = require('./client');

router.get('/input', (req, res) => {
  client.query('select * from input_table;')
  .then((data) => {
    data.rows.forEach(row => console.log(row));
    res.send(data.rows);
  })
  .catch(err => console.error(err));
});

router.get('/input/:inputID', (req, res) => {
  client.query(`select * from input_table where id=${req.params.inputID};`)
  .then(data => {
    console.log(data.rows[0]);
    res.send(data.rows[0]);
  })
  .catch(err => console.log(err));
});

router.post('/input', (req, res) => {
  const { input } = req.body;
  client.query(`insert into input_table (input, length) values ('${input}', ${input.length});`)
  .then(data => {
    return client.query('select * from input_table;')
  })
  .then(data => {
    res.send(data.rows);
  })
  .catch(err => console.error(err));
});

router.delete('/input/:inputID', (req, res) => {
  client.query(`delete from input_table where id=${req.params.inputID}`)
  .then(data => {
    return client.query('select * from input_table')
  })
  .then(data => {
    data.rows.forEach(row => console.log(row));
    res.send(data.rows);
  })
  .catch(err => console.error(err));
});

module.exports = router;