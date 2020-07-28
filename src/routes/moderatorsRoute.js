const express = require("express");

const router = express.Router();

router.get('/moderators', (req, res) => {
    res.send("moderators")
});

module.exports = router;