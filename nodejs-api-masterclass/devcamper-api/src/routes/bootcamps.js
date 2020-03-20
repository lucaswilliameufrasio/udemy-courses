const express = require('express');
const bootcampsController = require('../controllers/BootcampController');
const router = express.Router();

router.get('/', bootcampsController.getBootcamps);

router.get('/:id', bootcampsController.getBootcamp);

router.post('/', bootcampsController.createBootcamp);

router.put('/:id', bootcampsController.updateBootcamp);

router.delete('/:id', bootcampsController.deleteBootcamp);

module.exports = router;