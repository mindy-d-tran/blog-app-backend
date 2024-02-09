import { Router } from "express";

//importing model
import Comment from "../models/comments.js";

const router = new Router();

router.get('/', async(req,res)=>{
    res.send('testing');
});

export default router;