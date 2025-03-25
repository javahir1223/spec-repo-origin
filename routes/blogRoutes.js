const express = require('express');
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { verifyAdmin } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/get-all', getBlogs);
router.get('/get/:id', getBlogById);
router.post('/create-blog', createBlog );
router.put('/update-blog/:id', updateBlog );
router.delete('/delete-blog/:id', deleteBlog );

module.exports = router;
