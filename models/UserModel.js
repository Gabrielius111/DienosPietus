const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please add user name"],
    },
    userEmail: {
        type: String,
        required: [true, "Please add user email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add user password"],
    },
    role: {
        type: String,
        required: true,
    },
  }, 
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);