const express = require('express');
const { getArticles, createArticle, getArticleById, updateArticle, deleteArticle } = require('../controllers/articleController');

const router = express.Router();

router.get('/', getArticles)
router.get('/:id', getArticleById)
router.post('/create', createArticle)
router.put('/update/:id', updateArticle)
router.delete('/delete/:id', deleteArticle)

module.exports = router;

