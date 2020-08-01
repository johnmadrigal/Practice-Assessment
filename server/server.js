const express = require('express');
const path = require('path');
const app = express();
const Reminder = require('./models/model.js')
const reminderController = require('./controllers/reminderController.js')

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/assets/static', express.static(path.join(__dirname, '../assets/static')))
app.get('/', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/reminder', reminderController.postReminder, (req, res) => {
  //returns the created reminder in db
  return res.status(200).json(res.locals.data);
});

app.get('/reminder', reminderController.getReminders, (req, res) => {
  //return an array of reminders in db
  return res.status(200).json(res.locals.data);
});

app.delete('/reminder/:id', reminderController.deleteReminder, (req, res) => {
  //returns the deleted object in db
  return res.status(200).json(res.locals.data);
});

app.use('*', (req, res) => {
  res.status(404);
});

app.use( (err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))