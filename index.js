import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req,res)=> res.send("welcome to blog app api"));

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));