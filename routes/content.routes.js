const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/content.controller');

router.get('/',  ContentController.getContents );
router.get('/:id', ContentController.getContentById);
router.post('/', ContentController.createContent);
router.put('/:id', ContentController.updateContent);
router.delete('/:id', ContentController.deleteContent);
module.exports = router;
