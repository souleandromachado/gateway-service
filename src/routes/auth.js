const express = require('express');
const router = express.Router();
const forward = require('../utils/forwardRequest');

router.post('/login', (req, res) =>
  forward(process.env.AUTH_SERVICE_URL, req, res)
);

module.exports = router;
