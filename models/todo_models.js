const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
  createdAt: { type: Date, require: true, default: Date.now },
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
