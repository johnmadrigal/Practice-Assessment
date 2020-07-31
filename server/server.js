const express = require('express');
const path = require('path');
const app = express();
const Reminder = require('./models/model.js')

const PORT = 3000;

app.use('/assets/static', express.static(path.join(__dirname, '../assets/static')))
app.get('/', (req,res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/reminder')

app.use('*', (req, res) => {
  res.status(404);
});

app.use( (err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))