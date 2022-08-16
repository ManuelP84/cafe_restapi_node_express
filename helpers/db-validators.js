const Role = require('../models/role');
const User = require('../models/user');


const isValidRole = async (role = '') => {
    // Verify if is a valid role

    const existsRole = await Role.findOne({ role });
    if(!existsRole){
      throw new Error(`The role ${role} is not present in the Data Base.`);
    }
  }

const emailExists = async (email ='') => {
    // Verify if the email exists

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error(`The email: ${email} already exists`);
    //   return res.status(400).json({
    //     message: "The email already exists."
    //  });
    }
}

  module.exports = { 
    isValidRole ,
    emailExists,
}