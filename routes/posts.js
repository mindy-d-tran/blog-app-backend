import { Router } from "express";

//importing model
import Post from "../models/posts.js";

const router = new Router();

router.get('/', async(req,res)=>{
    res.send('testing');
});

export default router;