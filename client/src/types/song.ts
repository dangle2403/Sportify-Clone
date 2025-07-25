export interface Song {
  _id: string;
  title: string;
  artist: string;
  imageURL: string;
  audioURL: string;
  duration: number;
  album?: string | null; // Album ID or null
  createdAt?: string;
  updatedAt?: string;
}
