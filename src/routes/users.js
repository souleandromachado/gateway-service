const express = require('express');
const router = express.Router();
const forward = require('../utils/forwardRequest');
const auth = require('../middlewares/auth');

router.use(auth);

// Apenas professores podem criar/editar/deletar usuários
router.post('/', auth, (req, res) => {
  if (req.user.role !== 'TEACHER')
    return res.status(403).json({ message: 'Apenas professores podem criar usuários' });
  forward(process.env.USER_SERVICE_URL, req, res);
});

router.put('/:id', auth, (req, res) => {
  forward(process.env.USER_SERVICE_URL, req, res);
});

router.delete('/:id', auth, (req, res) => {
  if (req.user.role !== 'TEACHER')
    return res.status(403).json({ message: 'Apenas professores podem deletar usuários' });
  forward(process.env.USER_SERVICE_URL, req, res);
});

router.get('/', auth, (req, res) => {
  forward(process.env.USER_SERVICE_URL, req, res);
});

module.exports = router;
