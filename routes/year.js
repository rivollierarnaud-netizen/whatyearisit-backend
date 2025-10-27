const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    const currentYearNumber = new Date().getFullYear();
    const currentYearString = currentYearNumber.toString();
    res.json({ year: currentYearString });
});

module.exports = router;