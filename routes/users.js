import { Router } from "express";

//importing model
import User from "../models/users.js";

const router = new Router();

router.get('/', async(req,res)=>{
    res.send('testing');
});

export default router;