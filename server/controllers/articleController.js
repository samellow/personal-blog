const { trusted } = require('mongoose');
const Article = require('../models/article');

const getArticles = async(req, res)=> {
  try {
    const articles = await Article.find();
    if(articles.length === 0) {
        return res.status(404).json({message: 'No articles found'})
    } 

    res.status(200).json(articles);
  } catch (error) {
    res.status(404).json({error: 'No articles found'})
    console.log(error)
  }
    
}

const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if(!article) {
            return res.status(404).json({message: 'Article not found'})
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({message: 'Article not found'})
        console.log(error.message)
    }
}



const createArticle = async (req, res) => {
    try {
        const { title, excerpt, content} = req.body

        const article = new Article({title, excerpt, content});
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.json({message: error.message});
        console.log(error.message)
    }
}

const updateArticle = async (req, res) => {
    try {
        const articleId = req.params.id
        const update = req.body
        const article = await Article.findByIdAndUpdate(articleId, update, {new: true} )

        if(!article) {
            return res.status(404).json({message: 'Article not found'})
        }
        const updatedArticle = await Article.findById(articleId)
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(404).json({message: 'Problem updating article'})
        console.log(error.message)
    }
}

const deleteArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const deletedArticle = await Article.findByIdAndDelete(articleId);

        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.status(200).json({ message: 'Article deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting article', error: error.message });
        console.log(error.message);
    }
};

module.exports = {getArticles, createArticle, getArticleById, updateArticle, deleteArticle};