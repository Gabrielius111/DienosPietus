const express = require("express");
const router = express.Router();

const { createDish, 
    getAllDishes,
    getOneDish,
    updateDish,
    deleteDish,
 } = require("../controllers/dishControllers.js");
const { protectAdmin } = require("../middlewares/adminAuthMiddleware.js");

router.route("/").post(protectAdmin, createDish);
router.route("/all").post(getAllDishes);
router.route("/:id")
.get(getOneDish)
.put(protectAdmin, updateDish)
.delete(protectAdmin, deleteDish);

module.exports = router;