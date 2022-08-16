const User = require('../models/user');
const bcryptjs = require('bcryptjs');

// GET
const userGet = (req, res) => {
  // Query params
  const { lastname, title = "no tittle" } = req.query;
  res.status(200).json({
    message: "get api",
    lastname,
    title,
  });
};

// PUT
const userPut = (req, res) => {
  // Params. Also need to change the url route
  const { id } = req.params;
  res.status(200).json({
    message: "put api",
    id,
  });
};

// POST
const userPost = async (req, res) => {
  
  const { name, email, password, role } = req.body;
  const user = new User({name, email, password, role});

  // Verify if the email exists

  // Encript the password
  const salt = bcryptjs.genSaltSync();  // Is 10 of default. Is the number of salts
  user.password = bcryptjs.hashSync(password, salt);
  
  // Save in DB
  await user.save();
  
  res.status(200).json({
    message: "post api",
    user
  });
};

// DELETE
const userDelte = (req, res) => {
  res.status(200).json({
    message: "delete api",
  });
};

// PATCH
const userPatch = (req, res) => {
  res.status(200).json({
    message: "patch api",
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userPatch,
  userDelte,
};
