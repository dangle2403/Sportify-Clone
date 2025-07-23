import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controllers/album.controller.js";

const albumRouter = Router();

albumRouter.get("/", getAllAlbums);
albumRouter.get("/:id", getAlbumById);

export default albumRouter;
