import Song from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    // -1 = descending order from newest to oldest
    const songs = await Song.find().sort({ createdAt: -1 });
    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    next(error);
  }
};

export const getSongById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    res.status(200).json(song);
  } catch (error) {
    console.error("Error fetching song by ID:", error);
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    // fetch 6 random songs using mongodb aggregation
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageURL: 1,
          audioURL: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching featured songs:", error);
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageURL: 1,
          audioURL: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching featured songs:", error);
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageURL: 1,
          audioURL: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching featured songs:", error);
    next(error);
  }
};
