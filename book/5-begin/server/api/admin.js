const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

router.use('/api/v1/admin', (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(401).json({ error: 'Unauthorized access' });
    return;
  }

  next();
});

router.get('/books', async (req, res) => {
  try {
    const books = await Book.list();
    res.json(books);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
});

module.exports = router;
