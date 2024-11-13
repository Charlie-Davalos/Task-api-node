const TodoController = require("../../controllers/todo_controller");
const TodoModel = require("../../models/todo_models");
const newTask = require("../mockups/todo_mockup.json");
const httpMocks = require("node-mocks-http");

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("Todo Controller Create", () => {
  // check if the create method exists in the controller
  it("Test create method exists in controller", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  // test the create method
  it("should call TodoModel.create", () => {
    req.body = newTask;
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTask);
  });

  // test the status code
  it("should return 201 status code", () => {
    req.body = newTask;
    TodoController.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
  });
});
