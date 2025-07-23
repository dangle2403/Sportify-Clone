import Album from "../models/album.model.js";

export const getAllAlbums = async (req, res, next) => {
  try {
    // Fetch all albums and populate the songs field
    const albums = await Album.find().populate("songs");
    res.status(200).json(albums);
  } catch (error) {
    console.error("Error fetching albums:", error);
    next(error);
  }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Find album by ID and populate the songs field
    const album = await Album.findById(id).populate("songs");
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    res.status(200).json(album);
  } catch (error) {
    console.error("Error fetching album by ID:", error);
    next(error);
  }
};
