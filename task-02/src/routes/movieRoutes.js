const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Definir rotas para CRUD
router.post('/movies', movieController.create);
router.get('/movies', movieController.getAll);
router.get('/movies/:id', movieController.getById);
router.put('/movies/:id', movieController.update);
router.delete('/movies/:id', movieController.delete);

module.exports = router;