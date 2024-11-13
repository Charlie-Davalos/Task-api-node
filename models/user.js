const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
});

// add a method to return whether the user is an adult to the userSchema
userSchema.methods.isAdult = function () {
  return this.age >= 18;
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
