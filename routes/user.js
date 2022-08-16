const { Router } = require("express");
const { check } = require('express-validator');
const {
  userGet,
  userPut,
  userPost,
  userDelte,
  userPatch,
} = require("../controllers/user");
const { isValidRole, emailExists } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/",[
  check('name', 'Name required!').not().isEmpty(),
  check('password', 'Password must contains at least 6 characters!').isLength({ min: 6 }),
  check('email', 'The mail is not valid!').isEmail(),
  //check('role', 'Not a valid role!').isIn(['ADMIN_ROLE0', 'USER_ROLE']),
  check('role').custom(isValidRole),
  check('email').custom(emailExists),
  validateFields  // Custom middleware
] ,userPost);

router.delete("/", userDelte);

router.patch("/", userPatch);

module.exports = router;
