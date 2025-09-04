const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../Controllers/contactControllers");

router.post("/contact", sendContactEmail);

module.exports = router;
