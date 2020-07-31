const Reminder = require('../models/model.js');

const reminderController = {};

reminderController.postReminder = async (req, res, next) => {
  const { text } = req.body
  try {
    const reminder = await Reminder.create({text})
    res.locals.data = reminder;
    return next();
  } catch (e) {
    return next(err)
  }

}

module.exports = reminderController;