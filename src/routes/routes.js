const router = require("express").Router();
const controller = require("../controllers/controller.js");

router.get("/latestproduct", controller.selectAll);
router.get("/ourservices", controller.getAllServices);
router.post("/contact", controller.postContact);
router.get("/admincontact", controller.getContact);
router.delete("/:id", controller.deleteProduct);
router.delete("/:idService", controller.deleteService);
router.delete("/:idContact", controller.deleteContact);
router.post("/adminservice", controller.postService);
router.post("/adminproduct", controller.postProduct);
router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.get("/isUserAuth", controller.verify);
module.exports = router;
