import { Router } from 'express';
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getSongById, getTrendingSongs } from '../controllers/song.controller';
import { protectRoute, requireAdmin } from '../middlewares/auth.middleware';


const songRouter = Router();

songRouter.get("/", protectRoute, requireAdmin,getAllSongs)
songRouter.get("/:id", getSongById);
songRouter.get("/featured", getFeaturedSongs);
songRouter.get("/made-for-you", getMadeForYouSongs);
songRouter.get("/trending", getTrendingSongs);

export default songRouter;