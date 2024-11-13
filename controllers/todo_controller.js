const todoModel = require("../models/todo_models");

exports.createTodo = (req, res, next) => {
  todoModel.create(req.body);
  res.status(201).send();
};
