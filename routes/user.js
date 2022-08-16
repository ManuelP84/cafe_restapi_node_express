const { Router } = require("express");
const {
  userGet,
  userPut,
  userPost,
  userDelte,
  userPatch,
} = require("../controllers/user");

const router = Router();

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/", userPost);

router.delete("/", userDelte);

router.patch("/", userPatch);

module.exports = router;
