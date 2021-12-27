var mongoose = require("mongoose");
var formSchema = new mongoose.Schema({
  username: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("Form", formSchema);
