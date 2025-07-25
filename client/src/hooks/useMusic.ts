import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import type { Album } from "@/types/album";
import type { Song } from "@/types/song";

interface MusicState {
  albums: Album[];
  songs: Song[];
  isLoading: boolean;
  currentAlbum: null | Album;
  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (id: string) => Promise<void>;
  fetchSongs: () => Promise<void>;
}

export const useMusic = create<MusicState>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  currentAlbum: null,

  fetchAlbums: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/albums");
      set({ albums: res.data });
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAlbumById: async (id) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get(`/albums/${id}`);
      set({ currentAlbum: res.data });
      return res.data;
    } catch (error) {
      console.error("Error fetching album by ID:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchSongs: async () => {},
}));
