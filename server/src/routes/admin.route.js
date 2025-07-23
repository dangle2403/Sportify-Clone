import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.use(protectRoute, requireAdmin);

adminRouter.post("/check", checkAdmin);
adminRouter.post("/songs", createSong);
adminRouter.post("/songs/:id", deleteSong);
adminRouter.post("/albums", createAlbum);
adminRouter.post("/albums/:id", deleteAlbum);

export default adminRouter;
