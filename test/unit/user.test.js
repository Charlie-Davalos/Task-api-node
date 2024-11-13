const userModel = require("../../models/user");

describe("User Model Test", () => {
  it("should be able to return whether the user is an adult", () => {
    const user = new userModel({ username: "Charlie", age: 20 });
    expect(user.isAdult()).toBeTruthy();
  });

  it("should be able to return whether the user is an adult", () => {
    const user = new userModel({ username: "Charlie", age: 17 });
    expect(user.isAdult()).toBeFalsy();
  });
});
