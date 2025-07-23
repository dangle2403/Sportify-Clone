import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  audioURL: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  album: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
}, {timestamps: true})

const Song = mongoose.model("Song", songSchema);

export default Song;