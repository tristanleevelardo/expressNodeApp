const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  talent: { type: String, required: true },
});

module.exports = mongoose.model("Form", FormSchema);
