const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contactsController");

router.get('/contact', contactController.getContactPage);

router.post('/contact/send', contactController.postContactPage)

module.exports = router;