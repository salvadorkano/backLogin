const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  name: String,
});

module.exports = model("User", UserSchema);
