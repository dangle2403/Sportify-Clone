import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middlewares/auth.middleware.js';
import { createAlbum, createSong, deleteAlbum, deleteSong } from '../controllers/admin.controller.js';


const adminRouter = Router();

adminRouter.post("/songs", protectRoute, requireAdmin, createSong);
adminRouter.post("/songs/:id", protectRoute, requireAdmin, deleteSong);
adminRouter.post("/albums", protectRoute, requireAdmin, createAlbum);
adminRouter.post("/albums/:id", protectRoute, requireAdmin, deleteAlbum);

export default adminRouter;