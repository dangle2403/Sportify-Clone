import type { Song } from "./song";

export interface Album {
  _id: string;
  title: string;
  artist: string;
  imageURL: string;
  songs: Song[] | string[]; // Populated or just IDs
  releaseYear: number;
  createdAt?: string;
  updatedAt?: string;
}
