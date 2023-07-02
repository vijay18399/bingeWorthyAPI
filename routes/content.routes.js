const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/content.controller');

router.get('/content',  ContentController.getContents );
router.get('/content/:id', ContentController.getContentById);
router.post('/content', ContentController.createContent);
router.put('/content/:id', ContentController.updateContent);
router.delete('/content/:id', ContentController.deleteContent);
module.exports = router;
