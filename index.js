import express from "express";
const app = express();
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import ConnectDB from "./lib/connectDB.js";

// config envoirment variables
dotenv.config();

// define port
const PORT = process.env.PORT;

// it define up becuase it user body-parser
app.use("/webhooks", webhookRouter);

// json middleware
app.use(express.json());

// routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// error middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong.",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server is running on PORT ${PORT}`);
});

export default app;
