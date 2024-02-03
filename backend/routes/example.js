// routes/example.js
const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({ message: 'Example route response' });
});

module.exports = router;
