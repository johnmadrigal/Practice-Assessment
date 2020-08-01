const Reminder = require('../models/model.js');

const reminderController = {};

reminderController.postReminder = async (req, res, next) => {
  const { text } = req.body;
  try {
    const reminder = await Reminder.create({text});
    res.locals.data = reminder;
    return next();
  } catch (err) {
    return next(err);
  }
}

reminderController.getReminders = async (req, res, next) => {
  try {
    const reminders = await Reminder.find({}).exec();
    res.locals.data = reminders;
    return next();
  } catch (err) {
    return next(err);
  }
}

reminderController.deleteReminder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await Reminder.findByIdAndDelete(id).exec();
    console.log(deleted)
    res.locals.data = deleted;
    return next();
  } catch (err) {
    return next(err)
  }
}

module.exports = reminderController;