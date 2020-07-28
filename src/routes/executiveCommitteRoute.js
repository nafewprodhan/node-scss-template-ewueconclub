const express = require("express");

const router = express.Router();

router.get('/executive-committee', (req, res) => {
    res.send("executive committee")
});

module.exports = router;