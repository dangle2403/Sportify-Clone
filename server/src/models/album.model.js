import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
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
  songs: [{
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Song",
  }],
  releaseYear:{
    type: Number,
    required: true,
  }
}, {timestamps: true})

const Album = mongoose.model("Album", albumSchema);

export default Album;