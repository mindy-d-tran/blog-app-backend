import "./loadEnv.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// importing routes
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import commentsRouter from "./routes/comments.js";

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors()); // allows frontend to connect to backend
app.use(morgan("dev")); // logger to know what requests you are calling
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({ extended: true })); // allow data in url

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

// routes
app.get("/", (req, res) => res.send("welcome to blog app api"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
