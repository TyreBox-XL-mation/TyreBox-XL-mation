const router = require("express").Router();
const controller = require("../controllers/controller.js");

router.get("/latestproduct", controller.selectAll);
router.get("/ourservices", controller.getAllServices);
router.post("/contact", controller.postContact);

module.exports = router;
