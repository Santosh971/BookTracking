const router = require("express").Router();
const c = require("../controllers/user.controller");

router.get("/getAllUser", c.getAllUsers);
router.get("/getUserById/:id", c.getUserById);
router.delete("/deleteUserById/:id", c.deleteUserById);
router.put("/updateUser", c.updateUser);



module.exports = router;





