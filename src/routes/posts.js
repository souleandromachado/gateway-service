const express = require('express');
const router = express.Router();
const forward = require('../utils/forwardRequest');
const auth = require('../middlewares/auth');

router.use(auth);

// Visualização liberada para todos os logados
router.get('/', (req, res) => forward(process.env.BLOG_SERVICE_URL, req, res));

// Professores têm acesso total
router.post('/', (req, res) => {
  if (req.user.role !== 'TEACHER')
    return res.status(403).json({ message: 'Somente professores podem postar' });
  forward(process.env.BLOG_SERVICE_URL, req, res);
});

router.put('/:id', (req, res) => {
  if (req.user.role !== 'TEACHER')
    return res.status(403).json({ message: 'Somente professores podem editar' });
  forward(process.env.BLOG_SERVICE_URL, req, res);
});

router.delete('/:id', (req, res) => {
  if (req.user.role !== 'TEACHER')
    return res.status(403).json({ message: 'Somente professores podem deletar' });
  forward(process.env.BLOG_SERVICE_URL, req, res);
});

module.exports = router;
