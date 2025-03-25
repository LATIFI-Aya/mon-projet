import express from"express"; 
import { getPosts, getPost, createPost, deletePost }  from "../controllers/post.controller.js"

const router = express.Router();

router.get("/", getPosts);  // Fetch all posts
router.get("/:slug", getPost);  // Fetch a single post by its slug
router.post("/", createPost);  // Create a new post
router.delete("/:id", deletePost);  // Delete a post by its ID

export default router;