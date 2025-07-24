import express from "express";
import dotenv from "dotenv";
import path from "path";

import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";
import authRouter from "./routes/auth.route.js";
import statsRouter from "./routes/stats.route.js";
import songRouter from "./routes/song.route.js";
import albumRouter from "./routes/album.route.js";
import connectDB from "./libs/db.js";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import cors from "cors";

const __dirname = path.resolve();

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true, // Allow credentials to be sent
  })
); // Enable CORS for all routes
app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware()); // this will add auth to the req obj => req.auth.userId
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB max file size
    },
  })
); // to handle file uploads

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/songs", songRouter);
app.use("/api/albums", albumRouter);
app.use("/api/stats", statsRouter);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV == "production"
        ? "Internal Server Error"
        : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
