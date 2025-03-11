const express = require('express');
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { verifyAdmin } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/get-all', getBlogs);
router.get('/get/:id', getBlogById);
router.post('/create-blog',verifyAdmin, createBlog );
router.put('/update-blog/:id',verifyAdmin, updateBlog );
router.delete('/delete-blog/:id',verifyAdmin, deleteBlog );

module.exports = router;
