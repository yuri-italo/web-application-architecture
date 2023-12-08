const express = require('express');
const router = express.Router();
const markerController = require('../controllers/markerController');

router.post('/markers', markerController.create);
router.get('/markers', markerController.getAll);
router.get('/markers/:id', markerController.getById);
router.put('/markers/:id', markerController.update);
router.delete('/markers/:id', markerController.delete);

module.exports = router;