const express = require("express");
const router = express.Router();

const { createCategory } = require("../controllers/categoryControllers.js");

const { protectAdmin } = require("../middlewares/adminAuthMiddleware.js");

router.route("/").post(protectAdmin, createCategory);


module.exports = router;