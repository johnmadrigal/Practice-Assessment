const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db_URI = "mongodb+srv://jmadrigal:kqrzij37@cluster0.0uxut.mongodb.net/practice?retryWrites=true&w=majority"

mongoose.connect(db_URI, {useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => console.log('Connected to MongoDB'))
  .catch( err => console.log(err))

const reminderSchema = new Schema({
  text: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
})

const Reminder = mongoose.model("Reminder", reminderSchema)

module.exports = Reminder
