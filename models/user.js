const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "The user name is required"],
  },
  email: {
    type: String,
    required: [true, "The user email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The user password is required"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: [true],
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", UserSchema);

/**
 * User model
 *
 * {
 *  name: 'manuel,
 *  email: 'fsdfs@mail.com,
 *  password: 'fef56SEDg5w',
 *  img: 'fsadfasdfsa',
 *  rol: 'user',
 *  state: false,
 *  google: 'true *
 * }
 */
