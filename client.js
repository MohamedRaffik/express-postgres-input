const pg = require('pg');
const postgresUrl = 'postgres://postgres@localhost/input_app';
const client = new pg.Client(postgresUrl);
client.connect();
module.exports = client;