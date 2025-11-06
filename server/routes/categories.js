const express = require('express');
const router = express.Router();

// Placeholder routes for categories
router.get('/', (req, res) => {
  res.json({ message: 'Category route working!' });
});

module.exports = router;
