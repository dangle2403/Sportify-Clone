import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import { getAlbumById, getAllAlbums } from "../controllers/album.controller";

const albumRouter = Router();

albumRouter.get("/", getAllAlbums);
albumRouter.get("/:id", getAlbumById);

export default albumRouter;
